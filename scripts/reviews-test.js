// Temporary test helper: scroll to #reviews on load so it's easy to see during testing.
(function(){
  if (typeof window === 'undefined') return;
  window.addEventListener('load', function(){
    try {
      var el = document.getElementById('reviews');
      if (el) {
        // slight delay to ensure layout is settled
        setTimeout(function(){
          el.scrollIntoView({behavior: 'smooth', block: 'start'});
        }, 250);
      }
    } catch (e) {
      // swallow errors in test helper
      console.warn('reviews-test error', e);
    }
  });
})();
