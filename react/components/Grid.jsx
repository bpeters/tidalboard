var React = require('react/addons');
var Flex = require('../styles/Flex.jsx');

module.exports = React.createClass({
	displayName: 'Grid',
	render: function() {
		return (
			<div style={Flex.grid.container}>
				<div style={Flex.grid.body}>
					<div style={Flex.grid.row}>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
});
