// Display map
$(document).ready(function() {

    var mapOptions = {
        center: new google.maps.LatLng(37.354, -121.952999),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    //Create Markers------------------------------------------------

    var marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(37.325885, -121.945375),
        map: map
    });

    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(37.349952, -121.940608),
        map: map,
    });

    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(37.319707, -121.947352),
        map: map,
    });

    var marker4 = new google.maps.Marker({
        position: new google.maps.LatLng(37.397946, -121.974294),
        map: map,
    });

    var marker5 = new google.maps.Marker({
        position: new google.maps.LatLng(37.318380, -121.950978),
        map: map,
    });

    var markers = [marker1, marker2, marker3, marker4, marker5];



    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(37.319707, -122),
        map: map,
        icon: 'R2D2.png',
        draggable: true
    });



    // From Google API:-----------------------------------------
    // https://developers.google.com/maps/documentation/javascript/examples/marker-remove

    // Add a marker to the map and push to the array.
    function addMarker(location) {
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
        markers.push(marker);
    }

    // Sets the map on all markers in the array.
    function setAllMap(map) {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }
    }

    // Removes the markers from the map, but keeps them in the array.
    function clearMarkers() {
        setAllMap(null);
    }

    // Shows any markers currently in the array.
    function showMarkers() {
        setAllMap(map);
    }

    // Deletes all markers in the array by removing references to them.
    function deleteMarkers() {
        clearMarkers();
        markers = [];
    }

    //End Google API functions--------------------------------

    //End Create Markers------------------------------------------------

    // Model:

    // Info Windows:

    var contentString1 = "<div style='height: 200px; width: 200px;'><img src='https://cdn3.gbot.me/photos/OV/50/1325969363/-Postcard_of_Westfield_Val-20000000002379950-500x375.jpg'><p>The Apple store is across from the Microsoft store!</p></div>";

    var infowindow1 = new google.maps.InfoWindow({
        content: contentString1
    });

    google.maps.event.addListener(marker1, 'click', function() {
        infowindow1.open(map, marker1);
    });

    var contentString2 = "<div style='height: 200px; width: 200px;'><img src='http://cdn.stateuniversity.com/assets/logos/images/2481/large_SCU.jpg'><p>A private non-profit Jesuit university.</p></div>";

    var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
    });

    google.maps.event.addListener(marker2, 'click', function() {
        infowindow2.open(map, marker2);
    });

    var contentString3 = "<div style='height: 200px; width: 200px;'><img src='http://www.sb-architects.com/wp-content/uploads/2013/12/Santana-Row-2014-SB-Architects-07.jpg'><p>European style shopping.</p></div>";

    var infowindow3 = new google.maps.InfoWindow({
        content: contentString3
    });

    google.maps.event.addListener(marker3, 'click', function() {
        infowindow3.open(map, marker3);
    });

    var contentString4 = "<div style='height: 200px; width: 200px;'><img src='https://www.cagreatamerica.com/images/cta/ga_SP15pass_cta.jpg'><p>Bay area's theme park.</p></div>";

    var infowindow4 = new google.maps.InfoWindow({
        content: contentString4
    });

    google.maps.event.addListener(marker4, 'click', function() {
        infowindow4.open(map, marker4);
    });

    var contentString5 = "<div style='height: 200px; width: 200px;'><img src='http://media-cdn.tripadvisor.com/media/photo-s/04/bd/21/4f/winchester-mystery-house.jpg'><p>A mansion unlike you have ever seen!</p></div>";

    var infowindow5 = new google.maps.InfoWindow({
        content: contentString5
    });

    google.maps.event.addListener(marker5, 'click', function() {
        infowindow5.open(map, marker5);
    });


    // Locations:

    var locations = [{
        name: "Valley Fair Mall",
        facts: "The Apple store is across from the Microsoft store!",
        marker: marker1,
        lat: 37.325885,
        lon: -121.945375
    }, {
        name: "Santa Clara University",
        facts: "A private non-profit Jesuit university.",
        marker: marker2,
        lat: 37.349952,
        lon: -121.940608
    }, {
        name: "Santana Row",
        facts: "European style shopping.",
        marker: marker3,
        lat: 37.319707,
        lon: -121.947352
    }, {
        name: "Great America Parkway",
        facts: "Bay area's theme park.",
        marker: marker4,
        lat: 37.397946,
        lon: -121.974294
    }, {
        name: "Winchester Mystery House",
        facts: "A mansion unlike you have ever seen!",
        marker: marker5,
        lat: 37.318380,
        lon: -121.950978
    }];


    //Knockout ViewModel

    var viewModel = {
        query: ko.observable('')
    };

    viewModel.locations = ko.dependentObservable(function() {
        var search = this.query().toLowerCase();
        return ko.utils.arrayFilter(locations, function(location) {
            return location.name.toLowerCase().indexOf(search) >= 0;
        });
    }, viewModel);

    ko.applyBindings(viewModel);

});


//End display map