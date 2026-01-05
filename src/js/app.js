import { renderNavbar } from "./nav.js";
import { initCart } from "./store.js";
import { renderProducts } from "./products.js";

document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  initCart();
  renderProducts();
});
