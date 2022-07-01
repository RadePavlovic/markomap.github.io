var myMap;
var lyrOSM;
var lyrData;

function removeLoader() {
  $(".loader-div").fadeOut(500, function () { 
    $(".loader-div").remove();   
  });
}

$(document).ready(function () { 

  myMap = L.map("map_div", {
    center: [44.861509284428749, 20.481897771863135],
    zoom: 15,
    zoomControl: true,
  });

  lyrOSM = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
  myMap.addLayer(lyrOSM);
  fetch("data/data.geojson")
    .then(function (response) {
      return response.json();
    })
    .then((res) => {
      var options = {
        maxZoom: 20,
        tolerance: 0,
        debug: 1,
        style: {
          fillColor: "#F2FF00",
          color: "#174ddc",
        },
      };
      L.geoJson.vt(res, options).addTo(myMap);
      setTimeout(() => {
        removeLoader(); 
      }, 500);
    });
});
