// Responsive nav "More" dropdown
window.addEventListener('DOMContentLoaded', () => {
  const moreBtn = document.querySelector('.more-btn');
  const navMore = document.querySelector('.nav-more');
  if (moreBtn && navMore) {
    moreBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navMore.classList.toggle('open');
      moreBtn.classList.toggle('active');
    });
    document.addEventListener('click', () => {
      navMore.classList.remove('open');
      moreBtn.classList.remove('active');
    });
    navMore.querySelector('.more-dropdown').addEventListener('click', e => e.stopPropagation());
  }
});