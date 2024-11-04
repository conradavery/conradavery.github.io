const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('.header');
const scrollDistance = header.offsetHeight;

function toggleStickyHeader() {
    if (window.scrollY > scrollDistance) {
        header.classList.add('sticky');
        navLinks.classList.add('rounded');
    } else {
        header.classList.remove('sticky');
        navLinks.classList.remove('rounded');
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

