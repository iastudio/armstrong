var revapi; //for slider

$(function() {
	// placeholder fix
	if ($.fn.placeholder.input && $.fn.placeholder.textarea) {
		console.log('Placeholder supported for INPUT & TEXTAREA tag');
	} else if ($.fn.placeholder.input) {
		$('textarea').placeholder();
		console.log('Placeholder supported for INPUT tag only');
	} else {
		$('input, textarea').placeholder();
		console.log('Placeholder NOT supported');
	}
	// slider init
	revapi = jQuery('.fullwidthbanner').revolution(
	{
		delay:4000,
		startwidth:1000,
		startheight:320,
		fullWidth:"off",
		forceFullWidth:"off",
		navigationType:"none",
		touchenabled:"on"
	});
});