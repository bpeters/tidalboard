var React = require('react/addons');
var LogInForm = require('./LogInForm.jsx')

module.exports = React.createClass({
	displayName: 'LogIn',
	propTypes: {
		params: React.PropTypes.object
	},
	render: function() {
		return (
			<LogInForm params={this.props.params} />
		);
	}
});
