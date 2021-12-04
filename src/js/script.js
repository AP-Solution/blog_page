window.addEventListener('DOMContentLoaded', ()=> {
	const header = document.querySelector('header');
	const hamburger = document.querySelector('.hamburger');
	const asideMenu = document.querySelector('aside.menu');
	const supportIcon = document.querySelector('div.support_icon');
	const asideSupport = document.querySelector('aside.support');
	const welcomeH2 = document.querySelector('h2.welcome_h2');
	const welcomeH3 = document.querySelector('h3.welcome_h3');


	setTimeout(() => {
		welcomeH2.style.opacity = 1;
		setTimeout(() => {
			welcomeH3.style.opacity = 1;
		}, 1000);
	}, 1000);
	window.addEventListener('scroll', () => {
		if(pageYOffset != 0) {
			header.style.backdropFilter = 'blur(5px)';
			localStorage.setItem('KEY', window.pageYOffset);
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
