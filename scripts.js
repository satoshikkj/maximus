function toggleDetalhes(button) {
  const detalhes = button.nextElementSibling.nextElementSibling;

  if (detalhes.style.display === "block") {
    detalhes.style.display = "none";
    button.textContent = "Ver Detalhes";
  } else {
    detalhes.style.display = "block";
    button.textContent = "Ocultar Detalhes";
  }
}
