// ===============================
// HEADER DINÂMICO NO SCROLL
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// ===============================
// REVEAL ANIMATION (INTERSECTION OBSERVER)
// ===============================

const revealElements = document.querySelectorAll("section, .card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(el => {
    el.classList.add("reveal-hidden");
    observer.observe(el);
});


// ===============================
// MENU MOBILE MODERNO
// ===============================

const menuMobile = document.querySelector(".menu-mobile");
const nav = document.querySelector(".nav");

menuMobile.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuMobile.classList.toggle("open");
});

// Fechar menu ao clicar em link
document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuMobile.classList.remove("open");
    });
});


// ===============================
// BOTÃO FLUTUANTE WHATSAPP
// ===============================

const whatsappBtn = document.createElement("a");
whatsappBtn.href = "https://wa.me/559186182429";
whatsappBtn.target = "_blank";
whatsappBtn.classList.add("floating-whatsapp");
whatsappBtn.innerHTML = "💬";

document.body.appendChild(whatsappBtn);


// ===============================
// SCROLL SUAVE MELHORADO
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ===============================
// ACCORDION CARDS MELHORADO
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {

        const isActive = card.classList.contains("active");

        cards.forEach(c => c.classList.remove("active"));

        if (!isActive) {
            card.classList.add("active");
        }
    });
});
