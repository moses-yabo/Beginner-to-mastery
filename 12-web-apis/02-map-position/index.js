const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map);
navigator.geolocation.getCurrentPosition((pos) => {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;
  marker.setLatLng([`-34.050`, `18.667`]).update();
  map.setView([`-34.050`, `18.667`], 13);
  marker
    .bindPopup('<strong> Hello world</strong> <br> this is my Location')
    .openPopup();
});
