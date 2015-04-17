var React = require('react/addons');
var Flex = require('../styles/Flex.jsx');
var Paper = require('material-ui').Paper;

module.exports = React.createClass({
	displayName: 'card',
	propTypes: {
		data: React.PropTypes.object
	},
	render: function() {
		return (
			<div style={Flex.card.container}>
				<Paper zDepth={1}>
					{this.props.children}
				</Paper>
			</div>
		);
	}
});
