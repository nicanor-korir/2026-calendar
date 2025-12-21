// 2026 Tech Events Calendar - Application Logic

// ========================================
// SAVED EVENTS MANAGER (localStorage)
// ========================================
const SavedEvents = {
  STORAGE_KEY: 'techCalendar2026_savedEvents',

  // Get all saved event IDs
  getAll() {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Error reading saved events:', e);
      return [];
    }
  },

  // Check if an event is saved
  isSaved(eventId) {
    return this.getAll().includes(eventId);
  },

  // Save an event
  save(eventId) {
    const saved = this.getAll();
    if (!saved.includes(eventId)) {
      saved.push(eventId);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(saved));
      this._dispatchChange();
    }
  },

  // Remove an event from saved
  remove(eventId) {
    const saved = this.getAll().filter(id => id !== eventId);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(saved));
    this._dispatchChange();
  },

  // Toggle saved state
  toggle(eventId) {
    if (this.isSaved(eventId)) {
      this.remove(eventId);
      return false;
    } else {
      this.save(eventId);
      return true;
    }
  },

  // Get count of saved events
  getCount() {
    return this.getAll().length;
  },

  // Get count for a specific page
  getCountForPage(pageName) {
    const savedIds = this.getAll();
    return EVENTS_DATA.events.filter(e =>
      e.page === pageName && savedIds.includes(e.id)
    ).length;
  },

  // Dispatch custom event when saved list changes
  _dispatchChange() {
    window.dispatchEvent(new CustomEvent('savedEventsChanged'));
  }
};

// Global function for save button clicks
function toggleSaveEvent(eventId, event) {
  if (event) {
    event.stopPropagation();
  }

  const isSaved = SavedEvents.toggle(eventId);

  // Update all buttons for this event
  document.querySelectorAll(`[data-save-id="${eventId}"]`).forEach(btn => {
    btn.classList.toggle('saved', isSaved);
    // Use different text for card vs modal buttons
    if (btn.classList.contains('save-btn-modal')) {
      btn.innerHTML = isSaved ? '✓ Attending' : '+ Save to My List';
    } else {
      btn.innerHTML = isSaved ? '✓ Attending' : '+ Save';
    }
    btn.title = isSaved ? 'Click to remove from your list' : 'Save to your list';
  });

  // Update the card's saved indicator
  document.querySelectorAll(`.event-card[data-id="${eventId}"]`).forEach(card => {
    card.classList.toggle('is-saved', isSaved);
  });

  // Update saved count in filter tab
  updateSavedCount();
}

// Update the "My Events" filter count
function updateSavedCount() {
  if (typeof PAGE_NAME !== 'undefined') {
    const count = SavedEvents.getCountForPage(PAGE_NAME);
    const badge = document.querySelector('[data-filter="saved"] .filter-count');
    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline' : 'none';
    }
  }
}

class CalendarApp {
  constructor(pageName) {
    this.pageName = pageName;
    this.currentFilter = 'all';
    this.events = EventsAPI.getByPage(pageName);
  }

  init() {
    this.renderPage();
    this.bindFilters();
    this.bindModalEvents();
    Countdown.initAll();
  }

  renderPage() {
    const app = document.getElementById('app');
    const featured = EventsAPI.getFeatured(this.pageName);

    app.innerHTML = `
      ${Templates.header(this.pageName)}
      ${Templates.pageNav(this.pageName)}
      ${Templates.filterTabs(this.pageName)}

      <main class="main-content">
        ${featured ? Templates.featuredCard(featured) : ''}

        <section class="events-section">
          <div class="section-title">
            <h2>📅 ${Templates.pageTitles[this.pageName]}</h2>
          </div>
          <div class="events-grid" id="events-grid">
            ${this.events
              .filter(e => !e.isFeatured)
              .map(e => Templates.eventCard(e))
              .join('')}
          </div>
        </section>
      </main>

      ${Templates.footer()}

      <!-- Modals Container -->
      <div id="modals-container">
        ${this.events.map(e => Templates.modal(e)).join('')}
      </div>
    `;
  }

  bindFilters() {
    document.querySelectorAll('.nav-tab-secondary').forEach(tab => {
      tab.addEventListener('click', () => {
        // Update active state
        document.querySelectorAll('.nav-tab-secondary')
          .forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Apply filter
        this.currentFilter = tab.dataset.filter;
        this.applyFilter();
      });
    });
  }

  applyFilter() {
    const cards = document.querySelectorAll('.event-card');
    const featuredSection = document.querySelector('.featured-section');
    let visibleCount = 0;

    cards.forEach(card => {
      const category = card.dataset.category || '';
      const type = card.dataset.type || '';
      const eventId = card.dataset.id;

      let matches = false;

      if (this.currentFilter === 'all') {
        matches = true;
      } else if (this.currentFilter === 'saved') {
        // Check if this event is in the saved list
        matches = SavedEvents.isSaved(eventId);
      } else if (this.currentFilter === 'new') {
        // Check if this event has isNew flag
        matches = card.classList.contains('is-new') ||
          this.events.find(e => e.id === eventId)?.isNew === true;
      } else {
        matches = category.includes(this.currentFilter) ||
          type.includes(this.currentFilter);
      }

      if (matches) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    // Hide featured section when filtering (but show if saved and filtering by saved)
    if (featuredSection) {
      const featuredEvent = EventsAPI.getFeatured(this.pageName);
      let showFeatured = this.currentFilter === 'all';

      // Also show featured if it matches the current filter
      if (!showFeatured && featuredEvent) {
        if (this.currentFilter === 'saved') {
          showFeatured = SavedEvents.isSaved(featuredEvent.id);
        } else if (this.currentFilter === 'new') {
          showFeatured = featuredEvent.isNew === true;
        } else {
          showFeatured = featuredEvent.category.includes(this.currentFilter) ||
                         featuredEvent.type.includes(this.currentFilter);
        }
      }

      featuredSection.classList.toggle('hidden', !showFeatured);
      if (showFeatured && this.currentFilter !== 'all') {
        visibleCount++;
      }
    }

    // Show empty state if no results
    this.updateEmptyState(visibleCount, this.currentFilter === 'saved');
  }

  updateEmptyState(visibleCount, isSavedFilter = false) {
    const grid = document.getElementById('events-grid');
    let emptyState = grid.querySelector('.empty-state');

    if (visibleCount === 0) {
      if (emptyState) emptyState.remove();
      if (isSavedFilter) {
        grid.insertAdjacentHTML('beforeend', Templates.emptyStateSaved());
      } else {
        grid.insertAdjacentHTML('beforeend', Templates.emptyState());
      }
    } else if (emptyState) {
      emptyState.remove();
    }
  }

  bindModalEvents() {
    // Close on overlay click
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(modal => {
          modal.classList.remove('active');
        });
        document.body.style.overflow = '';
      }
    });
  }
}

// Global modal functions (for onclick handlers)
function openModal(id) {
  const modal = document.getElementById('modal-' + id);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    Countdown.updateInModal(modal);
  }
}

function closeModal(id) {
  const modal = document.getElementById('modal-' + id);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Page name is set in individual HTML files
  if (typeof PAGE_NAME !== 'undefined') {
    const app = new CalendarApp(PAGE_NAME);
    app.init();
  }
});
