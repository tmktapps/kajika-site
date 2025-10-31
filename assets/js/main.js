// 現在ページのナビに active を付与（data-pageを使う）
(() => {
  const page = document.body.dataset.page;
  if (!page) return;
  document.querySelectorAll('.nav a').forEach(a => {
    const target = a.getAttribute('href');
    if ((page === 'home' && target === '/')
      || target.startsWith(`/${page}/`)) a.classList.add('active');
  });
})();
// 年表示（©）
(() => {
  const el = document.getElementById('year'); if (el) el.textContent = new Date().getFullYear();
})();
