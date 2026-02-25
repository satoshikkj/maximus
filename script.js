
// =============================
// HEADER DINÂMICO AO SCROLL
// =============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.98)";
        header.style.boxShadow = "0 0 20px rgba(30,144,255,0.4)";
    } else {
        header.style.background = "rgba(13,13,13,0.95)";
        header.style.boxShadow = "none";
    }
});

// =============================
// ANIMAÇÃO AO SCROLL (REVEAL)
// =============================

const revealElements = document.querySelectorAll("section, .card, .plano, .member");

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
            element.style.transition = "all 0.8s ease";
        }
    });
};

window.addEventListener("scroll", revealOnScroll);

// Estado inicial oculto
revealElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
});

// =============================
// MENU MOBILE SIMPLES
// =============================

const nav = document.querySelector(".nav ul");

const menuMobile = document.querySelector(".menu-mobile");
const nav = document.querySelector(".nav");

menuMobile.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// =============================
// BOTÃO FLUTUANTE WHATSAPP
// =============================

const whatsappBtn = document.createElement("a");
whatsappBtn.href = "https://wa.me/559186182429";
whatsappBtn.target = "_blank";
whatsappBtn.innerHTML = "💬";
whatsappBtn.style.position = "fixed";
whatsappBtn.style.bottom = "25px";
whatsappBtn.style.right = "25px";
whatsappBtn.style.background = "#1E90FF";
whatsappBtn.style.color = "#fff";
whatsappBtn.style.fontSize = "24px";
whatsappBtn.style.width = "55px";
whatsappBtn.style.height = "55px";
whatsappBtn.style.display = "flex";
whatsappBtn.style.alignItems = "center";
whatsappBtn.style.justifyContent = "center";
whatsappBtn.style.borderRadius = "50%";
whatsappBtn.style.boxShadow = "0 0 20px #1E90FF";
whatsappBtn.style.zIndex = "999";
whatsappBtn.style.transition = "0.3s";

whatsappBtn.addEventListener("mouseenter", () => {
    whatsappBtn.style.transform = "scale(1.1)";
});

whatsappBtn.addEventListener("mouseleave", () => {
    whatsappBtn.style.transform = "scale(1)";
});

document.body.appendChild(whatsappBtn);

// =============================
// SCROLL SUAVE PARA LINKS INTERNOS
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});

// =============================
// CARDS EXPANSÍVEIS (ACCORDION)
// =============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {

        const isActive = card.classList.contains("active");

        // Fecha todos
        cards.forEach(c => c.classList.remove("active"));

        // Abre somente o clicado
        if (!isActive) {
            card.classList.add("active");
        }

    });
});
