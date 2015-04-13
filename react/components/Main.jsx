var React = require('react/addons');
var Home = require('./Home.jsx')

module.exports = React.createClass({
	displayName: 'Main',
	propTypes: {
		params: React.PropTypes.object,
		url: React.PropTypes.string
	},
	render: function() {
		var page;
		switch(this.props.url) {
			case '/signup':
				page = this.renderSignUp();
				break;
			case '/login':
				page = this.renderLogIn();
				break;
			default:
				page = this.renderHome();
		};
		return page;
	},
	renderHome: function() {
		return (
			<Home />
		);
	},
	renderSignUp: function() {
		return (
			<div>
				Sign Up
			</div>
		);
	},
	renderLogIn: function() {
		return (
			<div>
				Log In
			</div>
		);
	},
});
