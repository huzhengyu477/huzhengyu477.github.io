(() => {
  const list = document.getElementById('paper-list');
  if (!list) return;

  const buttons = document.querySelectorAll('.publication-filter');
  const papers = list.querySelectorAll('li[data-category]');
  const yearGroups = Array.from(list.querySelectorAll('.paper-year-group'));

  yearGroups.sort((a, b) => Number(b.dataset.year) - Number(a.dataset.year));
  yearGroups.forEach((group) => list.appendChild(group));

  function showCategory(category) {
    papers.forEach((paper) => {
      paper.hidden = category !== 'all' && paper.dataset.category !== category;
    });

    yearGroups.forEach((group) => {
      group.hidden = !Array.from(group.querySelectorAll('li[data-category]'))
        .some((paper) => !paper.hidden);
    });

    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.filter === category));
    });
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => showCategory(button.dataset.filter));
  });

  showCategory('all');
})();
