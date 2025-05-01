document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavLinks = document.querySelector('.mobile-navlinks');

    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileNavLinks.classList.toggle('hidden');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!mobileNavLinks.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            mobileNavLinks.classList.add('hidden');
        }
    });
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

// Categories dropdown functionality
const categoriesBtn = document.getElementById('categoriesBtn');
if (categoriesBtn) {
    categoriesBtn.addEventListener('click', () => {
        // Add your dropdown logic here
    });
}
// Initialize Swiper
// Initialize Swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    autoplay: {
        delay: 3000, // 5 seconds
        disableOnInteraction: false, // continues autoplay after user interaction
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1280: {
            slidesPerView: 4,  
            spaceBetween: 10   
        }
    }
});

const newsCarousel = new Swiper('.news-carousel', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        }
    }
    
});