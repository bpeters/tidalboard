var React = require('react/addons');
var AppBar = require('material-ui').AppBar;
var MenuItem = require('material-ui').MenuItem;
var LeftNav = require('material-ui').LeftNav;
var Grid = require('./Grid.jsx');

var MENU_ITEMS = [
	{ 
		type: MenuItem.Types.LINK, 
		payload: '/logout', 
		text: 'Log Out' 
	},
];

module.exports = React.createClass({
	displayName: 'Dashboard',
	propTypes: {
		params: React.PropTypes.object
	},
	getInitialState: function() {
		return {
			showLeftNav: false
		};
	},
	toggleLeftNav: function() {
		this.refs.LeftNav.toggle();
	},
	render: function() {
		var title = this.props.params.user.company + ' / Dashboard';
		return (
			<div>
				<AppBar title={title} onMenuIconButtonTouchTap={this.toggleLeftNav} />
				<Grid />
				<LeftNav ref='LeftNav' docked={false} menuItems={MENU_ITEMS} />
			</div>
		);
	}
});
