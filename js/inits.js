$(document).ready(function(){
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

  var myCirclePlayer = new CirclePlayer("#jquery_jplayer_1",
  { m4a: "js/libs/thrift.m4a" }, 
  { cssSelectorAncestor: "#cp_container_1" });

});