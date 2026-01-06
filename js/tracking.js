export function initTracking() {
  const map = L.map("map").setView([23.8103, 90.4125], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap"
  }).addTo(map);

  const marker = L.marker([23.8103, 90.4125]).addTo(map);

  let lat = 23.8103;
  let lng = 90.4125;

  setInterval(() => {
    lat += 0.0003;
    lng += 0.0003;
    marker.setLatLng([lat, lng]);
    map.panTo([lat, lng]);
  }, 2000);
}
