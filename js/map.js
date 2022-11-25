export const map = L.map('map-canvas')
  .setView({
    lat: 35.6895,
    lng: 139.69171,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainMarker = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

export const defaultMarkerIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker(
  {
    lat: 35.6895,
    lng: 139.69171,
  },
  {
    draggable: true,
    icon: mainMarker
  },
);

marker.addTo(map);

export const inputAddress = document.querySelector('#address');
marker.on('moveend', (evt) => {
  inputAddress.value = evt.target.getLatLng();
});
