// Select the menu icon and the navbar
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

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

document.addEventListener("DOMContentLoaded", function() {
    const textArray = ["Software Engineer", "Network Engineer", "Web Developer", "AI/ML Engineer"];
    let textIndex = 0;
    let charIndex = 0;
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const delayBetweenPhrases = 2000; // Delay between current and next text

    const textElement = document.querySelector(".text-animation");

    function type() {
        if (charIndex < textArray[textIndex].length) {
            textElement.innerHTML += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenPhrases);
        }
    }

    function erase() {
        if (charIndex > 0) {
            textElement.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            textIndex++;
            if (textIndex >= textArray.length) {
                textIndex = 0;
            }
            setTimeout(type, typingSpeed);
        }
    }

    setTimeout(type, delayBetweenPhrases + 250);
});

document.addEventListener('DOMContentLoaded', function() {
    var educationSection = document.querySelector('.education-bg');

    window.addEventListener('scroll', function() {
        var sectionPosition = educationSection.getBoundingClientRect().top;
        var screenPosition = window.innerHeight;

        if (sectionPosition < screenPosition) {
            educationSection.classList.add('in-view');
        } else {
            educationSection.classList.remove('in-view');
        }
    });
});
