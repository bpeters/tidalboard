var React = require('react/addons');
var request = require('superagent');
var Flex = require('../styles/Flex.jsx');

var MUI = require('material-ui');
var TextField = MUI.TextField;
var RaisedButton = MUI.RaisedButton;

module.exports = React.createClass({
	displayName: 'LogInForm',
	propTypes: {
		params: React.PropTypes.object
	},
	getInitialState: function() {
		return {
			email: null,
			password: null,
			error: null,
		};
	},
	handleEmailChange: function(e) {
		this.setState({
			email: e.target.value
		});
	},
	handlePasswordChange: function(e) {
		this.setState({
			password: e.target.value
		});
	},
	submitForm: function() {
		var self = this;
		request
			.post('/login')
			.send({ email: this.state.email, password: this.state.password })
			.set('Accept', 'application/json')
			.end(function(err, res){
				if (res.body.redirect) {
					window.location = res.body.redirect;
				} else {
					self.setState({
						error: res.body.error
					});
				}
			});
	},
	render: function() {
		return (
			<div style={Flex.form}>
				<TextField hintText="Email" value={this.state.email} errorText={this.state.error} onChange={this.handleEmailChange} />
				<TextField type="password" hintText="Password" value={this.state.password} onChange={this.handlePasswordChange} />
				<RaisedButton label="Submit" primary={true} onTouchTap={this.submitForm} />
			</div>
		);
	}
});
