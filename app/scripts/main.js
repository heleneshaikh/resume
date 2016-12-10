// GOOGLE MAPS
var locations = [];
function initMap() {
  locations = [
    ["Where I live", "50.833822", "4.524999", "home"],
    ["RealDolmen ICT consulting", "50.752922", "4.262945", "work"],
    ["GroupM advertising agency", "50.817341", "4.405944", "work"],
    ["Flagey concert venue", "50.826926", "4.373203", "work"],
    ["Botanique concert venue", "50.854709", "4.366243", "work"],
    ["Vrije Universiteit Brussel", "50.821658", "4.394886", "school"]
  ];

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    scrollwheel: false,
    center: new google.maps.LatLng(50.8052376, 4.3691867),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    switch (locations[i][3]) {
      case "home":
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map,
          icon: {
            url: ('../app/images/house.svg'),
            scaledSize: new google.maps.Size(45, 45)
          }
        });
        break;
      case "school":
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map,
          icon: {
            url: ('../app/images/school.svg'),
            scaledSize: new google.maps.Size(45, 45)
          }
        });
        break;
      case "work":
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map,
          icon: {
            url: ('../app/images/workplace.svg'),
            scaledSize: new google.maps.Size(45, 45)
          }
        });
    }

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
      return function () {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}

initMap();


