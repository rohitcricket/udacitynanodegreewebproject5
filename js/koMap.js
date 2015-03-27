function point(name, lat, long) {
    this.name = name;
    this.lat = ko.observable(lat);
    this.long = ko.observable(long);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, long),
        title: name,
        map: map,
        draggable: true
    });

    //if you need the poition while dragging
    google.maps.event.addListener(marker, 'drag', function() {
        var pos = marker.getPosition();
        this.lat(pos.lat());
        this.long(pos.lng());
    }.bind(this));

    //if you just need to update it when the user is done dragging
    google.maps.event.addListener(marker, 'dragend', function() {
        var pos = marker.getPosition();
        this.lat(pos.lat());
        this.long(pos.lng());
    }.bind(this));
}

var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: new google.maps.LatLng(37.3541667, -121.9541667),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

var viewModel = {
    points: ko.observableArray([
        new point('Test1', 37.3541667, -121.9541667),
        new point('Test2', 37.35, -121.9541667),
        new point('Test3', 37.36, -121.9541667)])
};

ko.applyBindings(viewModel);