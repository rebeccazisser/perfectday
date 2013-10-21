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
    value: 35,
    color:"#F7464A"
  }, 
  {
    value: 25,
    color: "#D4CCC5"
  }
  ]
  var ctx = document.getElementById("experiences").getContext("2d");
  var myNewChart = new Chart(ctx).Doughnut(data);


  var data = {
  labels : ["January","February","March","April","May","June","July"],
  datasets : [
    {
      fillColor : "rgba(220,220,220,0.5)",
      strokeColor : "rgba(220,220,220,1)",
      data : [65,59,90,81,56,55,40]
    },
    {
      fillColor : "rgba(151,187,205,0.5)",
      strokeColor : "rgba(151,187,205,1)",
      data : [28,48,40,19,96,27,100]
    }
  ]
  }
  var bar = document.getElementById("placesBeen").getContext("2d");
  new Chart(bar).Bar(data);

});