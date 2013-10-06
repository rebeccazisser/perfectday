// Controller for our navigation

$('.tools').click(function(){
	if ($('.subnav').is(":visible")) {
		$('.subnav').hide();
	} else {
		$('.subnav').show();
	}
});


$('#myToggle').bind('toggle', switchModes);

var switchModes = function() {

};