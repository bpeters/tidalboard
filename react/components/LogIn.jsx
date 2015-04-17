var React = require('react/addons');
var Grid = require('./Grid.jsx');
var Card = require('./Card.jsx');
var LogInForm = require('./LogInForm.jsx')

module.exports = React.createClass({
	displayName: 'LogIn',
	propTypes: {
		params: React.PropTypes.object
	},
	render: function() {
		return (
			<Grid>
				<Card>
					<LogInForm params={this.props.params} />
				</Card>
			</Grid>
		);
	}
});
