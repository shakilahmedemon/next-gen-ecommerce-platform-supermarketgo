export function submitReview(productId, rating, comment) {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.push({ productId, rating, comment });
  localStorage.setItem("reviews", JSON.stringify(reviews));
}
