var map1;

function initialize() {
    var mapOptions = {
        zoom: 7,
        center: {
            lat: 37.3541667,
            lng: -121.9541667
        },
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    map1 = new google.maps.Map(document.getElementById('map-canvas1'),
        mapOptions);

    // Create a <script> tag and set the USGS URL as the source.
    var script = document.createElement('script');
    script.src = 'http://earthquake.usgs.gov/earthquakes/feed/geojsonp/2.5/week';
    document.getElementsByTagName('head')[0].appendChild(script);
}

function eqfeed_callback(results) {
    map1.data.addGeoJson(results);
}

// Call the initialize function after the page has finished loading
google.maps.event.addDomListener(window, 'load', initialize);
