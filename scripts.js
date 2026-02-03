/* =========================================
   LOADING (se existir)
========================================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});

/* =========================================
   MENU MOBILE (se existir)
========================================= */
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.style.display =
      mobileMenu.style.display === "flex" ? "none" : "flex";
  });
}

/* =========================================
   TOGGLE DE INFORMAÇÕES DOS PLANOS
   (serve pros dois layouts)
========================================= */
function fecharOutrasInfos(infoAtual) {
  document.querySelectorAll(".info").forEach(info => {
    if (info !== infoAtual) {
      info.classList.remove("show");
      info.style.display = "none";
    }
  });
}

/* Botão modelo novo (.btn-info) */
document.querySelectorAll(".btn-info").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    if (!card) return;

    const info = card.querySelector(".info");
    if (!info) return;

    fecharOutrasInfos(info);
    info.classList.toggle("show");
  });
});

/* Botão modelo antigo (.info-btn) */
document.querySelectorAll(".info-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const info = btn.nextElementSibling;
    if (!info || !info.classList.contains("info")) return;

    fecharOutrasInfos(info);
    info.style.display =
      info.style.display === "block" ? "none" : "block";
  });
});

/* =========================================
   SCROLL SUAVE PARA ÂNCORAS
========================================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    // Fecha menu mobile após clique
    if (mobileMenu) mobileMenu.style.display = "none";
  });
});

/* =========================================
   ANIMAÇÃO DE ENTRADA DOS CARDS
========================================= */
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".card").forEach(card => {
    card.classList.remove("show");
    observer.observe(card);
  });
     }
