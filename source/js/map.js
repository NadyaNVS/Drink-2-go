const map = L.map('map')
  .on('load', () => {
    console.log('Карта инициализирована');
  })
  .setView({
    lat: 59.96840,
    lng: 30.31731,
  }, 17);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
    },
  ).addTo(map);

const pinIcon = L.icon({
  iconUrl: './img/map-castom-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [10, 30],
});

const pinMarker = L.marker(
  {
    lat: 59.96840,
    lng: 30.31731,
  },
  {
    icon: pinIcon,
  },
);

pinMarker.addTo(map);

map.setView({
  lat: 59.968322,
  lng: 30.317359,
}, 17);


