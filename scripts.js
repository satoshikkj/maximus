const botoes = document.querySelectorAll(".btn-info");

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const info = botao.nextElementSibling;

    if (info.style.display === "block") {
      info.style.display = "none";
      botao.textContent = "Ver Informações";
    } else {
      info.style.display = "block";
      botao.textContent = "Ocultar Informações";
    }
  });
});
