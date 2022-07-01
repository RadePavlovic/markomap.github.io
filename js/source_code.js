var myMap;
var lyrOSM;   
var lyrData; 
    
    


$(document).ready(function () {
    // create map object 
    myMap = L.map('map_div',  {center:[44.861509284428749,20.481897771863135 ], zoom:13, zoomControl:false });

    //add basemap layer
    lyrOSM = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png'); 
     myMap.addLayer(lyrOSM);
     fetch('data/data.geojson')
     .then(function(response) {
        return response.json();
      })
     .then(res => {
        console.log(res)
        var options = {
            maxZoom: 20,
            tolerance: 20,
            debug: 0,
            style: {
                fillColor: "#F2FF00",
                color: "#1EB300",
            },
        };
         L.geoJson.vt(res, options).addTo(myMap);
    })

 
	
    // let ddd = L.geoJSON.ajax('data/dest_file.json')._tradJson;



 

});
