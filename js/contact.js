// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.navlinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
});

// Form submission
const contactForm = document.getElementById('contactForm');

// Progress Bar
const NProgress = {
    start() {
        const progress = document.createElement('div');
        progress.id = 'nprogress';
        progress.innerHTML = `
            <div class="fixed top-0 left-0 w-full h-[3px] bg-blue-500 z-50">
                <div class="absolute right-0 w-[100px] h-full shadow-[0_0_10px_#3b82f6,0_0_5px_#3b82f6] opacity-100 transform rotate-3 translate-y-[-4px]"></div>
            </div>
            <div class="fixed top-[15px] right-[15px] z-[1031]">
                <div class="w-[18px] h-[18px] box-border border-2 border-transparent border-t-blue-500 border-l-blue-500 rounded-full animate-spin"></div>
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

// Add progress bar on form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    NProgress.start();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    setTimeout(() => {
        console.log('Form data:', data);
        contactForm.reset();
        alert('تم إرسال الرسالة بنجاح!');
        NProgress.done();
    }, 1000);
});