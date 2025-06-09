// Prevent right-click, drag, or save-as on images
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', e => e.preventDefault());
    img.addEventListener('dragstart', e => e.preventDefault());
  });
  document.querySelectorAll('.img-overlay').forEach(overlay => {
    overlay.addEventListener('contextmenu', e => e.preventDefault());
    overlay.addEventListener('dragstart', e => e.preventDefault());
    overlay.addEventListener('mousedown', e => e.preventDefault());
    overlay.addEventListener('touchstart', e => e.preventDefault());
  });
});