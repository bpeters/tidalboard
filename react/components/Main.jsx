var React = require('react/addons');

module.exports = React.createClass({
	displayName: 'Main',
	propTypes: {
		params: React.PropTypes.object
	},
	toggleLeftNav: function() {
		this.refs.LeftNav.toggle();
	},
	render: function() {
		return (
			<div>
				Hello World
			</div>
		);
	}
});
