function init_map() {
    var myOptions = {
        zoom:12,
        center:new google.maps.LatLng(53.9255892,27.5941272),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
    marker = new google.maps.Marker({
        map: map,position: new google.maps.LatLng(53.9255892,27.5941272)
    });
    infowindow = new google.maps.InfoWindow({
        content:'<strong>XXX Office</strong><br>Минск, Беларусь<br>'
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });

    infowindow.open(map,marker);
}

google.maps.event.addDomListener(window, 'load', init_map);
