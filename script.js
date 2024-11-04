const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('.header');
const scrollDistance = 500;

function toggleStickyHeader() {
    if (window.scrollY > scrollDistance) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}


window.addEventListener('scroll', toggleStickyHeader);

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('fa-times');
};

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 });  

    sections.forEach(section => {
        observer.observe(section);
    });
});

