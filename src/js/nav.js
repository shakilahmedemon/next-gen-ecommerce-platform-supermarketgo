import { getCartCount } from "./store.js";

export function renderNavbar() {
  const nav = document.getElementById("navbar");

  nav.innerHTML = `
    <div class="flex justify-between items-center p-4 bg-primary text-white">
      <h1 class="text-lg font-bold">SuperMarketGo</h1>
      <div>
        <button id="cart-btn" class="btn btn-primary">
          Cart (<span id="cart-count">${getCartCount()}</span>)
        </button>
      </div>
    </div>
  `;
}
