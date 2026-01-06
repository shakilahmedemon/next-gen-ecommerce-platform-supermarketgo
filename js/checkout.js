import { getCart } from "./store.js";
import { showToast } from "./notifications.js";

export function handleCheckout() {
  const cart = getCart();

  if (cart.length === 0) {
    showToast("Cart is empty", "error");
    return;
  }

  showToast("Payment successful. Order placed!");
  localStorage.removeItem("cart");
}
