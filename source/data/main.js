export default ({ error, pageName, status }) => ({
	appData: {
		page: {
			error,
			pageName,
			status
		}
	},
	description: 'My project',
	pixelperfect: JSON.stringify({ breakpoints: [1200], ext: 'jpg' }),
	projectName: 'My app'
});
