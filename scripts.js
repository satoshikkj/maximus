/* ================================
   TOGGLE DE INFORMAÇÕES DOS PLANOS
================================ */

function toggleInfo(button) {
  const card = button.closest('.card');
  const info = card.querySelector('.info');

  // Fecha todos os outros
  document.querySelectorAll('.info').forEach(item => {
    if (item !== info) {
      item.classList.remove('show');
    }
  });

  // Abre / fecha o selecionado
  info.classList.toggle('show');
}

/* ================================
   ANIMAÇÃO DE SCROLL SUAVE
================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/* ================================
   ANIMAÇÃO DE ENTRADA DOS CARDS
================================ */

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
});
