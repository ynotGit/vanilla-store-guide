var map = L.map("map").fitWorld();

L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoieW5vdGlubm92YXRlIiwiYSI6ImNqeGo3dmw3bzFjYnUzb21rNWo4N3YwamkifQ.01MtyB2wGg2FuCxM62nTCw",
  {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox.streets"
  }
).addTo(map);

L.Control.geocoder().addTo(map);

function onLocationFound(e) {
  var radius = e.accuracy / 2;

  L.marker(e.latlng)
    .addTo(map)
    .bindPopup("You are within " + radius + " meters from this point")
    .openPopup();

  L.circle(e.latlng, radius).addTo(map);
}

function onLocationError(e) {
  alert(e.message);
}

map.on("locationfound", onLocationFound);
map.on("locationerror", onLocationError);

map.locate({ setView: true, maxZoom: 16 });
