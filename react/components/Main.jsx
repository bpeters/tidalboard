var React = require('react/addons');
var Home = require('./Home.jsx');
var SignUp = require('./SignUp.jsx');
var LogIn = require('./LogIn.jsx');
var Dashboard = require('./Dashboard.jsx');

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
			case '/dashboard':
				page = this.renderDashboard();
				break;
			default:
				page = this.renderHome();
		};
		return page;
	},
	renderHome: function() {
		return (
			<Home params={this.props.params} />
		);
	},
	renderSignUp: function() {
		return (
			<SignUp params={this.props.params} />
		);
	},
	renderLogIn: function() {
		return (
			<LogIn params={this.props.params} />
		);
	},
	renderDashboard: function() {
		return (
			<Dashboard params={this.props.params} />
		);
	},
});
