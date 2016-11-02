function initMap() {
  var locations = [
    ['Flagey concert venue', '50.826926', '4.373203'],
    ['Botanique concert venue', '50.854709', '4.366243'],
    ['GroupM advertising agency', '50.817341', '4.405944'],
    ['RealDolmen ICT consulting', '50.752922', '4.262945'],
    ['Where I live', '50.833822', '4.524999']
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(50.855171, 4.350326),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
      return function () {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}


// function initMap() {
//   var location = {lat: 50.826926, lng: 4.373203};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 10,
//     center: location
//   });
//   var marker = new google.maps.Marker({
//     position: location,
//     map: map
//   });
// }
//
// initMap();
