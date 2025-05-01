document.addEventListener('DOMContentLoaded', () => { 
    // Mobile menu functionality 
    const mobileMenuBtn = document.getElementById('mobileMenuBtn'); 
    const mobileNavLinks = document.querySelector('.mobile-navlinks'); 
    const burgerIcon = mobileMenuBtn.querySelector('svg:not(#closeIcon)'); 
    const closeIcon = document.getElementById('closeIcon'); 

    mobileMenuBtn.addEventListener('click', (e) => { 
        e.stopPropagation(); 
        mobileNavLinks.classList.toggle('hidden'); 
        
        // Toggle between burger and close icons 
        burgerIcon.classList.toggle('hidden'); 
        closeIcon.classList.toggle('hidden'); 
    }); 

    // Close menu when clicking outside 
    document.addEventListener('click', (event) => { 
        if (!mobileNavLinks.contains(event.target) && !mobileMenuBtn.contains(event.target)) { 
            mobileNavLinks.classList.add('hidden'); 
            
            // Ensure burger icon is visible and close icon is hidden 
            burgerIcon.classList.remove('hidden'); 
            closeIcon.classList.add('hidden'); 
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