// 2026 Tech Events Calendar - Application Logic

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

      const matches = this.currentFilter === 'all' ||
        category.includes(this.currentFilter) ||
        type.includes(this.currentFilter);

      if (matches) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    // Hide featured section when filtering
    if (featuredSection) {
      featuredSection.classList.toggle('hidden', this.currentFilter !== 'all');
    }

    // Show empty state if no results
    this.updateEmptyState(visibleCount);
  }

  updateEmptyState(visibleCount) {
    const grid = document.getElementById('events-grid');
    let emptyState = grid.querySelector('.empty-state');

    if (visibleCount === 0) {
      if (!emptyState) {
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
