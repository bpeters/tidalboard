var React = require('react/addons');
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
			errorEmail: null,
			errorOther: null,
		};
	},
	componentDidMount: function() {
		this.generateErrors();
	},
	generateErrors: function() {
		var error = this.props.params.errors[0];
		if (error === '1') {
			this.setState({
				errorEmail: 'Email not found'
			});
		} else {
			this.setState({
				errorOther: error.charAt(0).toUpperCase() + error.slice(1),
			});
		}
	},
	handleEmailChange: function(e) {
		this.setState({
			email: e.target.value,
			errorEmail: null,
			errorOther: null,
		});
	},
	handlePasswordChange: function(e) {
		this.setState({
			password: e.target.value,
		});
	},
	render: function() {
		var rdy = !this.state.email || !this.state.password;
		return (
			<form action="/login" method="post" role="form" className="flex-form">
				<TextField className="flex-form-input" name="email" hintText="Email" value={this.state.email} errorText={this.state.errorEmail ? this.state.errorEmail : this.state.errorOther} onChange={this.handleEmailChange} />
				<TextField className="flex-form-input" name="password" type="password" hintText="Password" value={this.state.password} onChange={this.handlePasswordChange} />
				<RaisedButton className="flex-form-button" label="Log In" primary={true} disabled={rdy} />
			</form>
		);
	}
});
