let cart = [];

export function initCart() {
  const stored = localStorage.getItem("cart");
  cart = stored ? JSON.parse(stored) : [];
}

export function addToCart(product) {
  cart.push(product);
  persist();
}

export function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  persist();
}

export function getCart() {
  return cart;
}

export function getCartCount() {
  return cart.length;
}

function persist() {
  localStorage.setItem("cart", JSON.stringify(cart));
  const count = document.getElementById("cart-count");
  if (count) count.textContent = cart.length;
}
