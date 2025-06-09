// Animate sections as they appear on page load
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.animate-fadein, .animate-slidein').forEach((el, idx) => {
        setTimeout(() => {
            el.style.animationPlayState = 'running';
        }, 180 * idx);
    });

    // Smooth scroll for nav links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Feedback form dummy handler
    const form = document.querySelector('form');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your feedback!');
            form.reset();
        });
    }
});
// Existing code...

// Prevent right click on the whole page
document.addEventListener('contextmenu', function(e) {
    // Only block on images
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// Prevent dragging images
document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
    img.addEventListener('dragstart', e => e.preventDefault());
});
