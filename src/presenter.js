import MostrarItems from "./MostrarCantItems"
import mostrarPrecioItem from "./MostrarPrecioItem"

const cantidad = document.querySelector("#Cantidad-de-items");
const precio = document.querySelector("#Precio-item");
const form = document.querySelector("#Totalizador-form");
const div = document.querySelector("#resultado-div");
const divTotal = document.querySelector("#PrecioTotal-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const CantidadItems = Number.parseInt(cantidad.value);
  const PrecioItems = Number.parseInt(precio.value);
  div.innerHTML = "<p>" + MostrarItems(CantidadItems) + "</p>";
  divTotal.innerHTML = "<p>" + mostrarPrecioItem(CantidadItems,PrecioItems) + "</p>";
  
});
