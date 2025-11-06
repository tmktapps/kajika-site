// 現在ページのナビに active を付与（data-pageを使う）
(() => {
  const page = document.body.dataset.page;
  if (!page) return;
  document.querySelectorAll('.nav a').forEach(a => {
  const href = a.getAttribute('href');
  const isHome = page === 'home' && (href === './' || href === 'index.html');
  const isPage = href && href.startsWith(page + '/');
  if (isHome || isPage) a.classList.add('active');
});
})();
// 年号
(() => { const el = document.getElementById('year'); if (el) el.textContent = new Date().getFullYear(); })();

