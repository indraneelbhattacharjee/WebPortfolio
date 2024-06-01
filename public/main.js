// Select the menu icon and the navbar
document.addEventListener("DOMContentLoaded", () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let navLinks = document.querySelectorAll('header nav a');

    // Toggle the active class on the navbar when the menu icon is clicked
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });

    // Close the navbar when a link is clicked (useful for mobile navigation)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuIcon.classList.remove('active');
        });
    });
});
