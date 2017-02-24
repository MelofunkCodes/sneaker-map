var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(45.502057,-73.57153917)
    });

    // Create a <script> tag and set the USGS URL as the source.
    var script = document.createElement('script');
    // This example uses a local copy of the GeoJSON stored at
    // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
    script.src = 'stores.js';
    document.getElementsByTagName('head')[0].appendChild(script);

}

// Loop through the results array and place a marker for each
// set of coordinates.
window.eqfeed_callback = function(results) {
  console.log("results: ", results); //should be 17 
    for (var i = 0; i < results.length; i++) {
        var coords = results[i].split(" ");
        var latLng = new google.maps.LatLng(coords[0], coords[1]);
        var marker = new google.maps.Marker({
            position: latLng,
            map: map
        });
    }
}


// function toLatLng(geo_loc){
//     //var array = "45 -73".split(" ").map(element => +element); //returns [45, -73]
//     var array = geo_loc.split(" ")
//                 .map(element => +element);
                
//     var latLng = { lat: array[0], lng: array[1]};
//     return latLng;
// }

