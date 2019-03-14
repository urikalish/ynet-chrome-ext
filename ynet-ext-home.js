
setTimeout(function() {
	var elms = document.querySelectorAll('.mta_bottom_links');
	if (elms && elms.length > 0) {
		for (i = 0; i < elms.length; i++ ) {
			elms[i].style['background-color'] = '#edc';
		}
	}	
}, 0);
