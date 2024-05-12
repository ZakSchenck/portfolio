// EVENT listener firing when scrolling
// Gets percentage of how far to the bottom of the page
// Updates loading bar width
window.addEventListener('scroll', function() {
    const loadBar = document.getElementById('scroll-bar');
    const scrollHeight = window.pageYOffset;
    const fullHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;

    const maxScrollHeight = fullHeight - viewportHeight;

    const scrollPercent = (scrollHeight / maxScrollHeight) * 100;

    loadBar.style.width = `${scrollPercent}%`;

    console.log("Scroll height:", scrollHeight, "Scroll percent:", scrollPercent);
});