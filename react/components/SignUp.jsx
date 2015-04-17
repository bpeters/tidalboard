var React = require('react/addons');
var Grid = require('./Grid.jsx');
var Card = require('./Card.jsx');
var SignUpForm = require('./SignUpForm.jsx');

module.exports = React.createClass({
	displayName: 'SignUp',
	propTypes: {
		params: React.PropTypes.object
	},
	render: function() {
		return (
			<Grid>
				<Card>
					<SignUpForm params={this.props.params} />
				</Card>
			</Grid>
		);
	}
});
