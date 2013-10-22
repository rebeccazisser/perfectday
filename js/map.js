// Google Maps Settings. 

var map,
    userLoc,
    directionsDisplay,
    americanLatLng,
    directionsService;
  
function initialize() {
  americanLatLng = new google.maps.LatLng(38.939287, -77.087184);
  directionsService = new google.maps.DirectionsService();

  var mapOptions = {
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    mapTypeControl: false,
  };

  directionsDisplay = new google.maps.DirectionsRenderer();
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  directionsDisplay.setMap(map);

  // Custom pin jank
  var image = new google.maps.MarkerImage('js/map_marker-a.png',null, null, null, new google.maps.Size(50,50));

  // HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      // Creates the popup
      var youMarker = new google.maps.Marker({
        map: map,
        position: pos,
        icon: image,
        size: (20,500)
      });

      var contentString = 'You';

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      youMarker.set('id', 'astring');

      map.setCenter(pos);

      google.maps.event.addListener(youMarker, 'click', function() {
        infowindow.open(map,youMarker);
      });
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    americanLatLng = new google.maps.LatLng(38.939287, -77.087184);
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

// google.maps.event.trigger(map, 'resize');

// google.maps.event.addDomListener(window, 'load', initialize);
