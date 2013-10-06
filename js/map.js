function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}

// Initialize the map.

var map,
    userLoc,
    directionsDisplay,
    americanLatLng,
    directionsService;
  
function initialize() {
  americanLatLng = new google.maps.LatLng(38.939287, -77.087184);
  directionsService = new google.maps.DirectionsService();

  var mapOptions = {
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  directionsDisplay = new google.maps.DirectionsRenderer();
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  directionsDisplay.setMap(map);

  // Custom pin jank
  var image = 'js/marker.png';

  var pinMarker = new google.maps.Marker({
    // hardcoded for now
      position: americanLatLng,
      map: map,
      title: "American University",
      icon: image
  });

  // HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      // Creates the popup
      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'You'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    // Need try-catch here; default to position coords at American U
    handleNoGeolocation(true);
  }

  // getRoute();
}

function getRoute() {
  var start = new google.maps.LatLng(36, -77),
      end = americanLatLng;

  var w1 = {
    location: new google.maps.LatLng(37, -78),
    stopover: true
  }

  var w2 = {
    location: new google.maps.LatLng(37.5, -77.5),
    stopover: true
  }

  var request = {
      origin: start,
      destination:end,
      waypoints: [w1, w2],
      travelMode: google.maps.DirectionsTravelMode.WALKING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      console.log(response);
      directionsDisplay.setDirections(response);
    } else {
      console.log('error getting directions: ' + status);
    }
  });
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    // Offset it from marker
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  // Positioning InfoWindow
  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

// Load our map with auth token
function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyB2I6KY8f2mM4wuMPy67xGlKDdHcr2GFWk&sensor=true&callback=initialize";
  document.body.appendChild(script);
}

window.onload = loadScript;

// google.maps.event.addDomListener(window, 'load', initialize);
