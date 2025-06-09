// Responsive nav "More" dropdown
window.addEventListener('DOMContentLoaded', () => {
  const moreBtn = document.querySelector('.more-btn');
  const navMore = document.querySelector('.nav-more');
  if (moreBtn && navMore) {
    moreBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navMore.classList.toggle('open');
      moreBtn.classList.toggle('active');
      // For mobile: if dropdown is wider than viewport, align left
      const dropdown = navMore.querySelector('.more-dropdown');
      if(dropdown) {
        dropdown.style.left = '';
        dropdown.style.right = '0';
        dropdown.style.minWidth = '';
        const rect = dropdown.getBoundingClientRect();
        if(rect.right > window.innerWidth) {
          dropdown.style.right = '';
          dropdown.style.left = 'unset';
          dropdown.style.minWidth = '60vw';
        }
      }
    });
    document.addEventListener('click', () => {
      navMore.classList.remove('open');
      moreBtn.classList.remove('active');
    });
    navMore.querySelector('.more-dropdown').addEventListener('click', e => e.stopPropagation());
  }
});