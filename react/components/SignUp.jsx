var React = require('react/addons');
var SignUpForm = require('./SignUpForm.jsx')

module.exports = React.createClass({
	displayName: 'SignUp',
	propTypes: {
		params: React.PropTypes.object
	},
	render: function() {
		return (
			<SignUpForm params={this.props.params} />
		);
	}
});
