var mymap = L.map("map").setView([51.505, -0.09], 13);
var marker = L.marker([51.5, -0.09]).addTo(mymap);

L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoieW5vdGlubm92YXRlIiwiYSI6ImNqeGo3dmw3bzFjYnUzb21rNWo4N3YwamkifQ.01MtyB2wGg2FuCxM62nTCw",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken:
      "pk.eyJ1IjoieW5vdGlubm92YXRlIiwiYSI6ImNqeGo3dmw3bzFjYnUzb21rNWo4N3YwamkifQ.01MtyB2wGg2FuCxM62nTCw"
  }
).addTo(mymap);
