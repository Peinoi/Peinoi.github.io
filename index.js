//index.js
const toggle = document.getElementById('themeToggle');
  const body = document.body;

  const saved = localStorage.getItem('theme');
  if (saved === 'light') body.classList.add('light-theme');

  toggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });

  // 게임 카드: 이미지 src가 있고 실제로 로드되면 placeholder 숨기기
  document.querySelectorAll('.game-card .card-thumb').forEach(thumb => {
    const img = thumb.querySelector('img');
    const placeholder = thumb.querySelector('.game-thumb-placeholder');
    if (!img || !img.src || img.src === window.location.href) return;
    img.addEventListener('load', () => {
      if (placeholder) placeholder.style.display = 'none';
    });
    img.addEventListener('error', () => {
      img.style.display = 'none';
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
