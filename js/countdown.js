// 2026 Tech Events Calendar - Countdown Timer Module

const Countdown = {
  intervals: [],

  // Initialize all countdown timers on the page
  initAll() {
    this.clearAll();

    document.querySelectorAll('[data-date]').forEach(el => {
      this.init(el);
    });
  },

  // Initialize a single countdown timer
  init(element) {
    const targetDate = new Date(element.dataset.date);
    this.update(element, targetDate);

    const interval = setInterval(() => {
      this.update(element, targetDate);
    }, 1000);

    this.intervals.push(interval);
  },

  // Update countdown display
  update(element, targetDate) {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      this.showLive(element);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Find value elements (works for both featured and modal countdowns)
    const values = element.querySelectorAll('.countdown-value, .modal-countdown-value');

    if (values.length >= 4) {
      values[0].textContent = days;
      values[1].textContent = hours;
      values[2].textContent = minutes;
      values[3].textContent = seconds;
    }
  },

  // Show "Live Now" when event has started
  showLive(element) {
    const values = element.querySelectorAll('.countdown-value, .modal-countdown-value');
    if (values.length >= 4) {
      values[0].textContent = '🎉';
      values[1].textContent = 'LIVE';
      values[2].textContent = 'NOW';
      values[3].textContent = '!';
    }
  },

  // Clear all intervals
  clearAll() {
    this.intervals.forEach(interval => clearInterval(interval));
    this.intervals = [];
  },

  // Update countdowns in a specific modal
  updateInModal(modal) {
    modal.querySelectorAll('[data-date]').forEach(el => {
      const targetDate = new Date(el.dataset.date);
      this.update(el, targetDate);
    });
  },

  // Format date as readable string
  formatDate(dateString) {
    const date = new Date(dateString);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    // Add ordinal suffix
    const suffix = (d) => {
      if (d > 3 && d < 21) return 'th';
      switch (d % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };

    return `${dayName}, ${day}${suffix(day)} ${month} ${year}`;
  }
};
