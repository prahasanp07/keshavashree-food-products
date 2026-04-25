// Menu tabs interaction: filters products by data-category
(() => {
  const tabs = Array.from(document.querySelectorAll('[data-tab]'));
  const items = Array.from(document.querySelectorAll('[data-category]'));
  const noProducts = document.getElementById('no-products');

  function setActive(tabEl) {
    const selected = tabEl.dataset.tab;

    // style tabs via is-active class for reliability
    tabs.forEach(t => t.classList.remove('is-active'));
    tabEl.classList.add('is-active');

    // show/hide items
    let visibleCount = 0;
    items.forEach(it => {
      if (it.dataset.category === selected || selected === 'all') {
        it.classList.remove('hidden');
        visibleCount++;
      } else {
        it.classList.add('hidden');
      }
    });

    if (noProducts) {
      if (visibleCount === 0) noProducts.classList.remove('hidden');
      else noProducts.classList.add('hidden');
    }
  }

  if (tabs.length === 0) return;

  // initialize: pick the first tab with border (if any) or first tab
  const initial = tabs.find(t => t.classList.contains('border-b-2')) || tabs[0];
  if (initial) setActive(initial);

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      setActive(tab);
    });
  });

  // debug (remove in production if not needed)
  // console.log('menu-tabs initialized', { tabsCount: tabs.length, itemsCount: items.length });
})();
