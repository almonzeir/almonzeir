// Fade-up animations using IntersectionObserver
const animatedBlocks = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const delay = target.dataset.delay || 0;
            setTimeout(() => target.classList.add('is-visible'), delay);
            observer.unobserve(target);
        }
    });
}, {
    threshold: 0.15
});

animatedBlocks.forEach(block => {
    if (!block.classList.contains('fade-up')) {
        block.classList.add('fade-up');
    }
    observer.observe(block);
});
