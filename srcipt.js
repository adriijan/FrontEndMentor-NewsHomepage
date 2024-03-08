document.addEventListener('DOMContentLoaded', function () {
	const menu = document.getElementById('menu');
	const body = document.querySelector('body');
	const hamburgerIcon = document.querySelector('.icon_hamburger');
	const crossIcon = document.querySelector('.icon_cross');

	
	function showSidePanel() {
		menu.classList.remove('menu');
		menu.classList.add('sidePanel');
		hamburgerIcon.classList.replace('icon_hamburger', 'icon_hamburger--hidden'); 
		crossIcon.classList.replace('icon_cross--hidden', 'icon_cross'); 
		body.classList.add('show-overlay'); 

	}

	
	function hideSidePanel() {
		menu.classList.remove('sidePanel');
		menu.classList.add('menu');
		hamburgerIcon.classList.replace('icon_hamburger--hidden', 'icon_hamburger'); 
		crossIcon.classList.replace('icon_cross', 'icon_cross--hidden'); 
		body.classList.remove('show-overlay'); 
	}

	
	hamburgerIcon.addEventListener('click', function () {
		showSidePanel();

	});

	
	crossIcon.addEventListener('click', function () {
		hideSidePanel(); 
	});

});
