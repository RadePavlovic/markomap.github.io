var map;
var lyrOSM;
var lyrData;

function removeLoader() {
  $(".loader-div").fadeOut(500, function () { 
    $(".loader-div").remove();   
  });
}

$(document).ready(function () { 

  map = L.map("map_div", {
    center: [44.861509284428749, 20.481897771863135],
    zoom: 15,
    zoomControl: true,
  });


  lyrOSM = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png");
  map.addLayer(lyrOSM); 
 
  fetch("data/data.geojson")
    .then(function (response) {
      return response.json();
    })
    .then((res) => {       

      var options = {
        maxZoom: 18,
        tolerance: 3,
        debug: 0,
        extent: 4096,
        buffer: 64, 
        style: {
          fillColor: "#F2FF00",
          color: "#174ddc",
        } 
      }; 
      L.geoJson.vt(res, options).addTo(map);
      setTimeout(() => {
        removeLoader(); 
      }, 500);
    }); 



















});
