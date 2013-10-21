$(document).ready(function(){
  // All related to getting the sidebar to pop out
  $('#sidebarToggle').click(function() {
    $('.sidebar').show("slide", 50);
  });

  $('#sidebarToggle2').click(function() {
    $('.sidebar').hide("slide", 50);
  });

  action = $('.action');

  action.click(function() {
    $('.sidebar').hide("slide", 25);
  });

  // ChartJS data
  var experienceData = [
  {
    value: 35,
    color:"#8d8199"
  }, 
  {
    value: 25,
    color: "#D4CCC5"
  }
  ]

  var placesData = [
  {
    value: 35,
    color:"#F7464A"
  }, 
  {
    value: 25,
    color: "#D4CCC5"
  }
  ]
  var ctx = document.getElementById("experiences").getContext("2d");
  var myNewChart = new Chart(ctx).Doughnut(experienceData);

  var ctx = document.getElementById("placesBeen").getContext("2d");
  var myNewChart = new Chart(ctx).Doughnut(placesData);

});