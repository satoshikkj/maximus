/* =========================
   ANIMAÇÃO DE ENTRADA (CARDS)
========================= */
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach(card => observer.observe(card));


/* =========================
   BOTÃO "INFORMAÇÕES" (PLANOS)
========================= */
function toggleInfo(button) {
  const info = button.nextElementSibling;

  // Fecha todas as outras infos abertas
  document.querySelectorAll('.info').forEach(item => {
    if (item !== info) {
      item.style.display = 'none';
      const btn = item.previousElementSibling;
      if (btn && btn.tagName === 'BUTTON') {
        btn.textContent = 'Informações';
      }
    }
  });

  // Alterna a info clicada
  if (info.style.display === 'block') {
    info.style.display = 'none';
    button.textContent = 'Informações';
  } else {
    info.style.display = 'block';
    button.textContent = 'Ocultar';
  }
}


/* =========================
   MODAL (caso esteja usando)
========================= */
const modal = document.getElementById('modal');
const btnInfo = document.getElementById('btnInfo');
const closeModal = document.getElementById('closeModal');

if (btnInfo && modal && closeModal) {
  btnInfo.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}


/* =========================
   SMOOTH SCROLL (MENU)
========================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


/* =========================
   SEGURANÇA MOBILE (NADA QUEBRA)
========================= */
document.addEventListener('touchstart', () => {}, { passive: true });
