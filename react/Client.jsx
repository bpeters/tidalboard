var React = require('react/addons');
var App = require('./App.jsx');
var App = React.createFactory(App);

var injectTapEventPlugin = require("react-tap-event-plugin");

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

var props = document.getElementById("props").innerHTML;
props = JSON.parse(props);

if (typeof window !== 'undefined') {
	window.onload = function() {
		React.render(App({
			title: props.title,
			params: props.params
		}), document);
	};
}
