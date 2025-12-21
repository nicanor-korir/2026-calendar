// 2026 Tech Events Calendar - HTML Templates
// Generates HTML from event data

const Templates = {
  // Page titles
  pageTitles: {
    events: "Conferences & Events",
    hackathons: "Hackathons & Competitions",
    cfp: "Call for Papers"
  },

  // Shared header
  header(currentPage) {
    const meta = EventsAPI.getMeta();
    return `
      <header class="header">
        <div class="header-badge">
          <span>🚀</span>
          <span>2026 Competition Season</span>
        </div>
        <h1>2026 Tech Events Calendar</h1>
        <p class="header-subtitle">${meta.subtitle}</p>

        <div class="stats-bar">
          <div class="stat-item">
            <div class="stat-value">${meta.totalEvents}</div>
            <div class="stat-label">Events</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${meta.totalPrizes}</div>
            <div class="stat-label">Total Prizes</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${meta.berlinEvents}</div>
            <div class="stat-label">Berlin</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${meta.cfpCount}</div>
            <div class="stat-label">CFPs</div>
          </div>
        </div>
      </header>
    `;
  },

  // Page navigation (3 main pages)
  pageNav(currentPage) {
    const pages = [
      { id: 'events', label: 'Conferences & Events', href: 'events.html', icon: '🎯' },
      { id: 'hackathons', label: 'Hackathons & Competitions', href: 'hackathons.html', icon: '💻' },
      { id: 'cfp', label: 'Call for Papers', href: 'cfp.html', icon: '📄' }
    ];

    return `
      <nav class="nav-tabs page-nav">
        ${pages.map(page => `
          <a href="${page.href}"
             class="nav-tab ${page.id === currentPage ? 'active' : ''}">
            ${page.icon} ${page.label}
          </a>
        `).join('')}
      </nav>
    `;
  },

  // Sub-filter tabs
  filterTabs(pageName) {
    const filters = EventsAPI.getFiltersForPage(pageName);
    if (!filters.length) return '';

    return `
      <nav class="nav-tabs secondary-tabs">
        ${filters.map((filter, idx) => {
          let countBadge = '';
          if (filter.showCount && typeof SavedEvents !== 'undefined') {
            const count = SavedEvents.getCountForPage(pageName);
            countBadge = `<span class="filter-count" style="${count > 0 ? '' : 'display:none'}">${count}</span>`;
          }
          return `
            <button class="nav-tab-secondary ${idx === 0 ? 'active' : ''}"
                    data-filter="${filter.id}">
              ${filter.icon ? filter.icon + ' ' : ''}${filter.label}${countBadge}
            </button>
          `;
        }).join('')}
      </nav>
    `;
  },

  // Event card
  eventCard(event) {
    const urgentClass = event.isUrgent ? 'urgent' : '';
    const categoryAttr = event.category.join(' ');
    const typeAttr = event.type.join(' ');
    const isSaved = typeof SavedEvents !== 'undefined' && SavedEvents.isSaved(event.id);
    const savedClass = isSaved ? 'is-saved' : '';

    return `
      <div class="event-card ${urgentClass} ${savedClass}"
           data-category="${categoryAttr}"
           data-type="${typeAttr}"
           data-id="${event.id}"
           onclick="openModal('${event.id}')">
        <div class="event-header">
          <div class="event-date-badge ${urgentClass}">
            <div class="month">${event.dateDisplay.month}</div>
            <div class="day">${event.dateDisplay.day}</div>
          </div>
          <button class="save-btn ${isSaved ? 'saved' : ''}"
                  data-save-id="${event.id}"
                  onclick="toggleSaveEvent('${event.id}', event)"
                  title="${isSaved ? 'Click to remove from your list' : 'Save to your list'}">
            ${isSaved ? '✓ Attending' : '+ Save'}
          </button>
        </div>
        <h3 class="event-title">${event.title}</h3>
        <div class="event-organizer">${event.organizer}</div>
        ${event.prize ? `
          <div class="event-prize">${event.prize.icon} ${event.prize.amount}</div>
        ` : ''}
        ${event.location ? `
          <div class="event-location">📍 ${event.location.display}</div>
        ` : ''}
        <div class="event-tags">
          ${event.tags.map(tag => `
            <span class="tag ${tag.text === 'NEW' ? 'new' : (tag.color !== 'default' ? tag.color : '')}">${tag.text}</span>
          `).join('')}
        </div>
        <div class="event-footer">
          <div class="event-deadline">
            ${event.page === 'cfp' ? 'Deadline' : 'Date'}: <strong>${event.dateDisplay.month} ${event.dateDisplay.day}</strong>
          </div>
          <div class="event-action">View Details →</div>
        </div>
      </div>
    `;
  },

  // Featured event card
  featuredCard(event) {
    if (!event) return '';

    const targetDate = event.dates.countdownTarget === 'deadline'
      ? event.dates.deadline
      : event.dates.start;

    return `
      <section class="featured-section">
        <div class="section-title">
          <h2>⭐ Featured Event</h2>
          <span class="badge">Recommended</span>
        </div>

        <div class="featured-card" onclick="openModal('${event.id}')">
          <div class="featured-content">
            <div class="featured-info">
              <div class="featured-header">
                <div class="featured-icon">${event.icon}</div>
                <div>
                  <h3 class="featured-title">${event.title}</h3>
                  <div class="featured-organizer">${event.organizer}</div>
                </div>
              </div>
              <p class="featured-description">
                ${event.modal.overview}
              </p>
              <div class="featured-tags">
                ${event.tags.map(tag => `
                  <span class="tag ${tag.text === 'NEW' ? 'new' : (tag.color !== 'default' ? tag.color : '')}">${tag.text}</span>
                `).join('')}
              </div>
              <div class="featured-meta">
                <div class="meta-item">
                  <span class="icon">📅</span>
                  <span>${event.dateDisplay.month} ${event.dateDisplay.day}, 2026</span>
                </div>
                <div class="meta-item">
                  <span class="icon">📍</span>
                  <span>${event.location.display}</span>
                </div>
                ${event.prize ? `
                  <div class="meta-item">
                    <span class="icon">${event.prize.icon}</span>
                    <span>${event.prize.amount}</span>
                  </div>
                ` : ''}
              </div>
            </div>
            <div class="featured-countdown">
              <div class="countdown-label">Event Starts In</div>
              <div class="countdown-timer" data-date="${targetDate}">
                <div class="countdown-unit">
                  <div class="countdown-value">--</div>
                  <div class="countdown-name">Days</div>
                </div>
                <div class="countdown-unit">
                  <div class="countdown-value">--</div>
                  <div class="countdown-name">Hrs</div>
                </div>
                <div class="countdown-unit">
                  <div class="countdown-value">--</div>
                  <div class="countdown-name">Min</div>
                </div>
                <div class="countdown-unit">
                  <div class="countdown-value">--</div>
                  <div class="countdown-name">Sec</div>
                </div>
              </div>
              <div class="featured-cta">
                <a href="${event.links.register}" target="_blank" class="btn-primary" onclick="event.stopPropagation()">
                  Register Now →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  // Modal
  modal(event) {
    const isCFP = event.page === 'cfp';
    const targetDate = event.dates.countdownTarget === 'deadline'
      ? event.dates.deadline
      : event.dates.start;
    const isSaved = typeof SavedEvents !== 'undefined' && SavedEvents.isSaved(event.id);

    return `
      <div class="modal-overlay" id="modal-${event.id}">
        <div class="modal">
          <div class="modal-header">
            <div>
              <h3 style="font-size: 1.5rem; margin-bottom: 0.25rem;">
                ${event.icon} ${event.title}
              </h3>
              <p style="color: var(--accent-primary);">${event.organizer}</p>
            </div>
            <button class="modal-close" onclick="closeModal('${event.id}')">×</button>
          </div>
          <div class="modal-body">
            ${this.modalCountdown(event, targetDate)}
            ${this.modalOverview(event)}
            ${isCFP && event.modal.keyDates ? this.modalKeyDates(event) : ''}
            ${isCFP && event.modal.topics ? this.modalTopics(event) : ''}
            ${!isCFP && event.modal.requirements ? this.modalRequirements(event) : ''}
            ${this.modalResources(event)}
          </div>
          <div class="modal-footer">
            <button class="save-btn-modal ${isSaved ? 'saved' : ''}"
                    data-save-id="${event.id}"
                    onclick="toggleSaveEvent('${event.id}', event)"
                    title="${isSaved ? 'Click to remove from your list' : 'Save to your list'}">
              ${isSaved ? '✓ Attending' : '+ Save to My List'}
            </button>
            <a href="${event.links.register}" target="_blank" class="btn-primary">
              ${isCFP ? 'View CFP →' : 'Register Now →'}
            </a>
            <button class="btn-secondary" onclick="closeModal('${event.id}')">Close</button>
          </div>
        </div>
      </div>
    `;
  },

  modalCountdown(event, targetDate) {
    const label = event.page === 'cfp' ? 'Submission Deadline' : 'Event Date';
    return `
      <div class="modal-countdown">
        <div class="modal-countdown-label">⏱️ ${label}</div>
        <div class="modal-countdown-timer" data-date="${targetDate}">
          <div class="modal-countdown-unit">
            <div class="modal-countdown-value">--</div>
            <div class="modal-countdown-name">Days</div>
          </div>
          <div class="modal-countdown-unit">
            <div class="modal-countdown-value">--</div>
            <div class="modal-countdown-name">Hours</div>
          </div>
          <div class="modal-countdown-unit">
            <div class="modal-countdown-value">--</div>
            <div class="modal-countdown-name">Minutes</div>
          </div>
          <div class="modal-countdown-unit">
            <div class="modal-countdown-value">--</div>
            <div class="modal-countdown-name">Seconds</div>
          </div>
        </div>
      </div>
    `;
  },

  modalOverview(event) {
    return `
      <div class="modal-section">
        <h4 class="modal-section-title"><span class="icon">📋</span> Overview</h4>
        <p style="color: var(--text-secondary);">${event.modal.overview}</p>
      </div>
    `;
  },

  modalRequirements(event) {
    if (!event.modal.requirements || !event.modal.requirements.length) return '';
    return `
      <div class="modal-section">
        <h4 class="modal-section-title"><span class="icon">✅</span> Requirements</h4>
        <ul class="requirements-list">
          ${event.modal.requirements.map(req => `<li>${req}</li>`).join('')}
        </ul>
      </div>
    `;
  },

  modalKeyDates(event) {
    if (!event.modal.keyDates || !event.modal.keyDates.length) return '';
    return `
      <div class="modal-section">
        <h4 class="modal-section-title"><span class="icon">📅</span> Key Dates</h4>
        <ul class="requirements-list">
          ${event.modal.keyDates.map(d => `
            <li><strong>${d.label}:</strong> ${d.value}</li>
          `).join('')}
        </ul>
      </div>
    `;
  },

  modalTopics(event) {
    if (!event.modal.topics || !event.modal.topics.length) return '';
    return `
      <div class="modal-section">
        <h4 class="modal-section-title"><span class="icon">🎯</span> Topics</h4>
        <ul class="requirements-list">
          ${event.modal.topics.map(topic => `<li>${topic}</li>`).join('')}
        </ul>
      </div>
    `;
  },

  modalResources(event) {
    if (!event.modal.resources || !event.modal.resources.length) return '';
    return `
      <div class="modal-section">
        <h4 class="modal-section-title"><span class="icon">🔗</span> Resources</h4>
        <div class="resources-grid">
          ${event.modal.resources.map(res => `
            <a href="${res.url}" target="_blank" class="resource-link">
              <div class="resource-icon">${res.icon}</div>
              <span class="resource-text">${res.label}</span>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  },

  // Footer
  footer() {
    return `
      <footer class="footer">
        <p>Built with 💚 for the 2026 competition season</p>
        <p>Last updated: December 2025 | <a href="https://github.com/nicanorhopkins">GitHub</a></p>
      </footer>
    `;
  },

  // Empty state
  emptyState() {
    return `
      <div class="empty-state">
        <h3>No events match your filter</h3>
        <p>Try selecting a different category</p>
      </div>
    `;
  },

  // Empty state for saved events
  emptyStateSaved() {
    return `
      <div class="empty-state empty-state-saved">
        <div class="empty-state-icon">⭐</div>
        <h3>No saved events yet</h3>
        <p>Click the "+ Save" button on any event to add it to your list</p>
      </div>
    `;
  }
};
