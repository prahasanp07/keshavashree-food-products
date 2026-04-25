// Menu tabs interaction: filters products by data-category
document.addEventListener('DOMContentLoaded', () => {
  const tabs = Array.from(document.querySelectorAll('[data-tab]'));
  const items = Array.from(document.querySelectorAll('[data-category]'));
  const noProducts = document.getElementById('no-products');

  function setActive(tabEl) {
    const selected = tabEl.dataset.tab;

    // style tabs: active vs inactive
    tabs.forEach(t => {
      t.classList.remove('border-b-2', 'border-primary');
      t.classList.remove('text-primary');
      t.classList.add('text-primary/40');
    });
    tabEl.classList.add('border-b-2', 'border-primary');
    tabEl.classList.remove('text-primary/40');
    tabEl.classList.add('text-primary');

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
  setActive(initial);

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      setActive(tab);
    });
  });
});
