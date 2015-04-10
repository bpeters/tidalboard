var React = require('react/addons');
var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;
var MUI = require('material-ui')
var AppBar = MUI.AppBar;
var MenuItem = MUI.MenuItem;
var LeftNav = MUI.LeftNav;
var Paper = MUI.Paper;
var FlatButton = MUI.FlatButton;
var TextField = MUI.TextField;

var Widget = require('./Widget.jsx');

var MENU_ITEMS = [
	{ type: MenuItem.Types.SUBHEADER, text: 'Boards' },
	{
		 type: MenuItem.Types.LINK, 
		 payload: 'https://github.com/callemall/material-ui', 
		 text: 'Board 1' 
	}
];

module.exports = React.createClass({
	displayName: 'Main',
	propTypes: {
		params: React.PropTypes.object
	},
	toggleLeftNav: function() {
		this.refs.LeftNav.toggle();
	},
	render: function() {
		var layouts = {
			lg: [{static: true, i: 1, x: 0, y: 0, w: 5, h: 6}],
			md: [{static: true, i: 1, x: 0, y: 0, w: 4, h: 6}]
		};
		return (
			<div>
				<AppBar title="Title" onMenuIconButtonTouchTap={this.toggleLeftNav} />
				<LeftNav ref='LeftNav' docked={false} menuItems={MENU_ITEMS} />
				<ResponsiveReactGridLayout className="layout" layouts={layouts} cols={12} rowHeight={30}
						breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
						cols={{lg: 20, md: 16, sm: 12, xs: 8, xxs: 4}}>
					<div key={1}>
						<Widget />
					</div>
				</ResponsiveReactGridLayout>
			</div>
		);
	}
});
