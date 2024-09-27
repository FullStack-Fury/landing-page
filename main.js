const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
});

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Formulario enviado!');
    });
});