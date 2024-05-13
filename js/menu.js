const hamburger = document.querySelector('.hamburger-container');
const navlinks = document.querySelectorAll('nav a');
const navContainer = document.querySelector('nav');
let isOpen = true;

hamburger.addEventListener('click', () => {
    isOpen = !isOpen;


    if (!isOpen) {
        navContainer.style.height = '100vh';
    } else {
        navContainer.style.height = '0'
    }
})

navlinks.forEach((link) => {
    link.addEventListener('click', () => { 
        navContainer.style.height = '0';
        isOpen = !isOpen;
        document.getElementById('blur-overlay').style.display = 'none';
})
})

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}