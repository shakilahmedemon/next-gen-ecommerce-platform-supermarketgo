export function formatPrice(value) {
  return `$${value.toFixed(2)}`;
}

export function formatTime(date) {
  return date.toLocaleTimeString();
}
