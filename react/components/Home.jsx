var React = require('react/addons');

module.exports = React.createClass({
	displayName: 'Home',
	propTypes: {
		params: React.PropTypes.object
	},
	render: function() {
		console.log(this.props.params);
		return (
			<div>
				Home
			</div>
		);
	}
});
