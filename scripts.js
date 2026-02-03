/* =========================================
   LOADING (se existir)
========================================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});

/* =========================================
   MENU MOBILE
========================================= */
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    const aberto = mobileMenu.style.display === "flex";
    mobileMenu.style.display = aberto ? "none" : "flex";
  });
}

/* =========================================
   FECHAR MENU MOBILE AO CLICAR EM LINK
========================================= */
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    if (mobileMenu) {
      mobileMenu.style.display = "none";
    }
  });
});

/* =========================================
   TOGGLE DE INFORMAÇÕES (PLANOS)
========================================= */
function fecharOutrasInfos(infoAtual) {
  document.querySelectorAll(".info.show").forEach(info => {
    if (info !== infoAtual) {
      info.classList.remove("show");
    }
  });
}

document.querySelectorAll(".btn-info").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    if (!card) return;

    const info = card.querySelector(".info");
    if (!info) return;

    const aberto = info.classList.contains("show");

    fecharOutrasInfos(info);

    if (!aberto) {
      info.classList.add("show");
    }
  });
});

/* =========================================
   SCROLL SUAVE + FECHA MENU MOBILE
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

    if (mobileMenu) {
      mobileMenu.style.display = "none";
    }
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
    observer.observe(card);
  });
}
