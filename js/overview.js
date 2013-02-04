(function($){
	$('#wpbody .wrap').wrapInner('<div id="cptm-col-left" />');
	$('#wpbody .wrap').wrapInner('<div id="cptm-cols" />');
	$('#cptm-col-right').removeClass('hidden').prependTo('#cptm-cols');

	$('#cptm-col-left > .icon32').insertBefore('#cptm-cols');
	$('#cptm-col-left > h2').insertBefore('#cptm-cols');
})(jQuery);