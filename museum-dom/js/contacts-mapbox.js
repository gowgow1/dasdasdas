// Contacts mapbox

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFyeWEta3VuIiwiYSI6ImNrdWd1OW1sMjI1aW4zMW12bDhpNzE3anQifQ.p3UDI0LbotprQ1mphUIs3w";

const geojson = [
  {
    coordinates: [2.3364, 48.86091],
    color: "black",
  },
  {
    coordinates: [2.3333, 48.8602],
    color: "grey",
  },
  {
    coordinates: [2.3397, 48.8607],
    color: "grey",
  },
  {
    coordinates: [2.333, 48.8619],
    color: "grey",
  },
  {
    coordinates: [2.3365, 48.8625],
    color: "grey",
  },
];

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [2.3364, 48.86091],
  zoom: 15.78,
});

map.addControl(new mapboxgl.NavigationControl());

geojson.forEach((geo) => {
  new mapboxgl.Marker({
    color: geo.color,
  })
    .setLngLat(geo.coordinates)
    .addTo(map);
});