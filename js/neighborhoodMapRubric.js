// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {

// Google Map

  var mapOptions = {
        center: new google.maps.LatLng(37.3541667, -121.9541667),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var acOptions = {
        types: ['establishment'],
    };
    var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), acOptions);
    autocomplete.bindTo('bounds', map);
    var infoWindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map
    });

    google.maps.event.addListener(autocomplete, 'place_changed', function() {
        infoWindow.close();
        var place = autocomplete.getPlace();
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
        }
        marker.setPosition(place.geometry.location);
        infoWindow.setContent('<div><strong>' + place.name + '</strong><br>');
        infoWindow.open(map, marker);
        google.maps.event.addListener(marker, 'click', function(e) {

            infoWindow.open(map, marker);

        });
    });


// add traffic layer

 var trafficLayer = new google.maps.TrafficLayer();
   trafficLayer.setMap(map);


} // End Google Map


// Activates knockout.js
ko.applyBindings(new AppViewModel());