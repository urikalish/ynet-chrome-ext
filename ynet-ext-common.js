
setTimeout(function() {
	document.body.style['background-color'] = '#edc';

	var elms = document.querySelectorAll('.main_search');
	if (elms && elms.length > 0) {
		for (i = 0; i < elms.length; i++ ) {
			elms[i].style['background-color'] = '#dcb';
		}
	}	
}, 0);
