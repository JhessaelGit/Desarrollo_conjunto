
const cantidad = document.querySelector("#Cantidad-de-items");
const form = document.querySelector("#Totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const CantidadItems = Number.parseInt(cantidad.value);
  
  div.innerHTML = "<p>" + CantidadItems+ "</p>";
});
