/**
 * Define Global Variables
 */
const sections = document.querySelectorAll('section'); 
const navBar = document.querySelector('.navbar__menu'); 
let lastScrollY = window.scrollY; 
let timer; 

/**
 * End Global Variables
 * Start Helper Functions
 */

/**
 * Dynamically creates the navigation menu based on the page sections.
 */
function buildNavBar() {
    const navList = document.getElementById('navbar__list'); 
    sections.forEach(section => { 
        const li = document.createElement('li'); 
        const a = document.createElement('a'); 
        a.href = `#${section.id}`; 
        a.textContent = section.dataset.nav; 
        a.classList.add('menu__link');
        li.appendChild(a); 
        navList.appendChild(li); 
    });
}

/**
 * Highlights the navigation link corresponding to the section currently in view and styles the active section.
 */
function highlightActiveSection() {
    let current = ''; 

    sections.forEach(section => { 
        const sectionTop = section.getBoundingClientRect().top; 
        if (sectionTop <= window.innerHeight / 2 && sectionTop + section.clientHeight > window.innerHeight / 2) { 
            current = section.id; 
        }
    });

    const navLinks = document.querySelectorAll('.menu__link'); 
    navLinks.forEach(link => { 
        link.classList.remove('active'); 
        if (link.getAttribute('href') === `#${current}`) { 
            link.classList.add('active'); 
        }
    });

    sections.forEach(section => { 
        section.classList.remove('your-active-class'); 
        if (section.id === current) { 
            section.classList.add('your-active-class'); 
        }
    });
}

/**
 * Enables smooth scrolling to a section when its corresponding navigation link is clicked.
 */
document.addEventListener('click', (e) => { 
    const target = e.target.closest('a'); 
    if (target && target.classList.contains('menu__link')) {  
        e.preventDefault(); 
        const targetId = target.getAttribute('href'); 
        const targetSection = document.querySelector(targetId); 
        if (targetSection) { 
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
        }
    }
});

/**
 * Shows the navigation bar.
 */
function showNavBar() {
    navBar.classList.remove('hide');  
}

/**
 * Hides the navigation bar.
 */
function hideNavBar() {
    navBar.classList.add('hide'); 
}

/**
 * End Main Functions
 * Begin Events
 */

// Event listener for page load: Builds the navbar, highlights the initial active section, and shows the navbar if at the top.
window.addEventListener('load', () => { 
    buildNavBar(); 
    highlightActiveSection(); 
    if (window.scrollY === 0) { 
        showNavBar(); 
    }
});

// Event listener for scrolling: Manages active section highlighting and dynamically shows/hides the navbar based on scroll behavior.
window.addEventListener('scroll', () => { 
    highlightActiveSection(); 
    if (window.scrollY === 0) { 
        showNavBar(); 
    } else {
        if (window.scrollY < lastScrollY) { 
            showNavBar(); 
        } else {
            hideNavBar(); 
        }
    }

    clearTimeout(timer);
    timer = setTimeout(() => {
        if (window.scrollY !== 0) { 
            hideNavBar(); 
        }
    }, 1500); 

    lastScrollY = window.scrollY;
});