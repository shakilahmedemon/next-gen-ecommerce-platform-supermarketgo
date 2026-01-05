import { products } from "../data/products.js";
import { addToCart } from "./store.js";
import { showToast } from "./notifications.js";

export function renderProducts() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      ${products.map(p => `
        <div class="card product-card">
          <h2 class="font-bold">${p.name}</h2>
          <p>$${p.price}</p>
          <button class="btn btn-primary" data-id="${p.id}">
            Add to Cart
          </button>
        </div>
      `).join("")}
    </div>
  `;

  document.querySelectorAll("button[data-id]").forEach(btn => {
    btn.addEventListener("click", () => {
      const product = products.find(p => p.id == btn.dataset.id);
      addToCart(product);
      showToast("Item added to cart");
    });
  });
}
