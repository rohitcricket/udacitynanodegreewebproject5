// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {

// Google Map

function initialize() {

  var latitude = -33.8665433;
  var longitude = 151.1956316;
  var pyrmont = new google.maps.LatLng(latitude,longitude);

  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: pyrmont,
    zoom: 15
  });

  var request = {
    location: pyrmont,
    radius: 500,
    types: ['store']
  };
  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });


// add traffic layer

 var trafficLayer = new google.maps.TrafficLayer();
   trafficLayer.setMap(map);


}
// google.maps.event.addDomListener(window, 'load', initialize);


// End Google Map

	this.location = ko.observable("Santa Barbara");
	google.maps.event.addDomListener(window, 'load', initialize);
}


// Activates knockout.js
ko.applyBindings(new AppViewModel());