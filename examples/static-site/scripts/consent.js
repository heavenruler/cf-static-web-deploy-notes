(function () {
  'use strict';

  var banner = document.querySelector('[data-consent-banner]');
  if (!banner) return;

  var savedConsent = null;
  try { savedConsent = localStorage.getItem('analytics-consent'); } catch (error) {}

  function updateConsent(value) {
    var state = value === 'granted' ? 'granted' : 'denied';
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: state,
        ad_storage: state,
        ad_user_data: state,
        ad_personalization: state
      });
    }
    try { localStorage.setItem('analytics-consent', state); } catch (error) {}
    banner.hidden = true;
    console.debug('[consent]', state);
  }

  banner.querySelectorAll('[data-consent]').forEach(function (button) {
    button.addEventListener('click', function () {
      updateConsent(button.getAttribute('data-consent'));
    });
  });

  if (savedConsent !== 'granted' && savedConsent !== 'denied') {
    banner.hidden = false;
  }
}());
