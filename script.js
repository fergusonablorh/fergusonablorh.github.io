// Fade-in on scroll (Intersection Observer)

const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

elements.forEach(el => observer.observe(el));


// Subtle cursor effect (optional, minimal)

document.addEventListener("mousemove", (e) => {
    document.body.style.backgroundPosition = `${e.clientX / 50}px ${e.clientY / 50}px`;
});