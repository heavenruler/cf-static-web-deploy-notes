(function () {
  'use strict';

  window.trackEvent = function trackEvent(eventName, params = {}) {
    if (typeof eventName !== 'string' || !eventName) {
      console.debug('[tracking] ignored invalid event name');
      return;
    }

    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }

    if (typeof window.fbq === 'function' && eventName === 'generate_lead') {
      window.fbq('track', 'Lead');
    }

    console.debug('[tracking]', eventName, params);
  };
}());
