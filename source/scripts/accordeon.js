const showAccordeonList = () => {
	const serviceList = document.querySelector('[data-service-list]');

	if (serviceList) {
		const accButton = document.querySelectorAll('[data-acc-button]');
		const accList = document.querySelectorAll('[data-accordeon-list]');
		document.addEventListener('click', (event) => {
			accButton.forEach((button) => {
				if (event.target === button) {
					if (button.nextElementSibling.classList.contains('accordeon-list--active')) {
						button.nextElementSibling.classList.remove('accordeon-list--active');
					} else {
						accList.forEach((list) => {
							list.classList.remove('accordeon-list--active');
						});
						button.nextElementSibling.classList.add('accordeon-list--active');
					}
				}
				if (event.target.nodeName === 'MAIN' || event.target.nodeName === 'DIV') {
					accList.forEach((list) => {
						list.classList.remove('accordeon-list--active');
					});
				}
			});
		});
	}
};

export default showAccordeonList;
