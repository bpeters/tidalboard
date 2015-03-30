var React = require('react/addons');
var AppBar = require('material-ui').AppBar;

module.exports = React.createClass({
	displayName: 'Main',
	propTypes: {
		params: React.PropTypes.object
	},
	render: function() {
		return (
			<div>
				<AppBar title="Title" />
			</div>
		);
	}
});
