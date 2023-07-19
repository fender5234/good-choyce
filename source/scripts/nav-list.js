const showNavList = () => {
	const navList = document.querySelector('[data-nav-list]');
	const navButton = document.querySelector('[data-button-nav-list]');

	document.addEventListener('click', (event) => {
		if (event.target === navButton) {
			navList.classList.toggle('nav-list--active');
		} else {
			navList.classList.remove('nav-list--active');
		}
	});
};

export default showNavList;

