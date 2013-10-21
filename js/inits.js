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
  var data = [
  {
    value: 30,
    color:"#F7464A"
  }

  ]
  var ctx = document.getElementById("experiences").getContext("2d");
  var myNewChart = new Chart(ctx).Doughnut(data);

});