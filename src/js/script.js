window.addEventListener('DOMContentLoaded', ()=> {
	const header = document.querySelector('header');
	const asideMenu = document.querySelector('aside.menu');
	const asideSupport = document.querySelector('aside.support');
	window.addEventListener('scroll', () => {
		if(pageYOffset != 0) {
			header.style.backdropFilter = 'blur(5px)';
		} else {
			header.style.backdropFilter = 'blur(0px)'
		}
		console.log(pageYOffset);
	})

	
	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		asideMenu.classList.toggle('active');
	});


	supportIcon.addEventListener('click', () => {
		asideSupport.classList.toggle('active');
	});
})
