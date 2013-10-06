// Controller for our navigation

$(nav).click(function(){
	if ($('.subnav').is(":visible")) {
		$('.subnav').hide();
	} else {
		$('.subnav').show();
	}
});