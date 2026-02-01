function toggleDetalhes(button) {
  const plano = button.parentElement;
  const detalhes = plano.querySelector(".detalhes");

  detalhes.style.display =
    detalhes.style.display === "block" ? "none" : "block";
}
