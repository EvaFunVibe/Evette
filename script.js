// Animate elements on scroll/load
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  const trigger = window.innerHeight * 0.85;
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', () => {
  animateOnScroll();

  // "More" dropdown: toggle on click, close on outside click
  const moreBtn = document.querySelector('.more-btn');
  const navMore = document.querySelector('.nav-more');
  moreBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navMore.classList.toggle('open');
    moreBtn.classList.toggle('active');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (navMore.classList.contains('open')) {
      navMore.classList.remove('open');
      moreBtn.classList.remove('active');
    }
  });

  // Prevent dropdown from closing when clicking inside
  navMore.querySelector('.more-dropdown').addEventListener('click', (e) => {
    e.stopPropagation();
  });
});