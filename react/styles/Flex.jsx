exports.grid = {
	container : {
		position: 'absolute',
		left: 0,
		width: '100%',
		height: '100%',
	},
	body : {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	row : {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
};

exports.card = {
	container: {
		margin: '20px',
	},
	header : {
		paddingTop: '24px',
		paddingBottom: '24px',
		paddingLeft: '16px',
		paddingRight: '16px',
	},
};
