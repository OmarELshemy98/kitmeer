// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.navlinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
});

// Progress Bar
const NProgress = {
    start() {
        const progress = document.createElement('div');
        progress.id = 'nprogress';
        progress.innerHTML = `
            <div class="bar">
                <div class="peg"></div>
            </div>
        `;
        document.body.appendChild(progress);
    },
    done() {
        const progress = document.getElementById('nprogress');
        if (progress) {
            progress.remove();
        }
    }
};

// Add progress bar on page load
window.addEventListener('load', () => {
    NProgress.start();
    setTimeout(() => {
        NProgress.done();
    }, 500);
});