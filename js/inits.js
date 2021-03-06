$(document).ready(function(){
  // All related to getting the sidebar to pop out
  $('#sidebarToggle').click(function() {
    $('.sidebar').show("slide", 25);
  });

  $('#sidebarToggle2').click(function() {
    $('.sidebar').hide("slide", 25);
  });

  action = $('.action');

  action.click(function() {
    $('.sidebar').hide("slide", 25);
  });

  $('#creator-mode').click(function(){
    $('.bar-title').addClass('creator-mode');
  });

  $('#explorer-mode').click(function(){
    $('.bar-title').removeClass('creator-mode');
  });

  var myCirclePlayer = new CirclePlayer("#jquery_jplayer_1",
    {
      m4a: "js/libs/thrift.m4a"
    }, {
      cssSelectorAncestor: "#cp_container_1"
  });

  var myCirclePlayer = new CirclePlayer("#jquery_jplayer_2",
    {
      m4a: "js/libs/cathedral.m4a"
    }, {
      cssSelectorAncestor: "#cp_container_1"
  });

  var myCirclePlayer = new CirclePlayer("#jquery_jplayer_3",
    {
      m4a: "js/libs/gardens.m4a"
    }, {
      cssSelectorAncestor: "#cp_container_1"
  });

  var myCirclePlayer = new CirclePlayer("#jquery_jplayer_4",
    {
      m4a: "js/libs/white_noise.m4a"
    }, {
      cssSelectorAncestor: "#cp_container_1"
  });

  $('#pin').click(function(){
    $('.pin').show();
  });
});