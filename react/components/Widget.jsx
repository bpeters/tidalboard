var React = require('react/addons');
var MUI = require('material-ui')
var Paper = MUI.Paper;
var FlatButton = MUI.FlatButton;
var TextField = MUI.TextField;

module.exports = React.createClass({
	displayName: 'Widget',
	render: function() {
		return (
			<Paper innerClassName='flex-form' zDepth={1}>
				<TextField hintText="Title" />
				<FlatButton label="Add Title" primary={true} />
				<TextField hintText="Description" multiLine={true} />
				<FlatButton label="Add Description" primary={true} />
				<TextField hintText="Link" />
				<FlatButton label="Add Link" primary={true} />
				<FlatButton primary={true}>
					<i className="fa fa-file-image-o"></i>
					<span className="image-button" >Upload Image</span>
				</FlatButton>
				<FlatButton primary={true}>
					<i className="fa fa-file-text-o"></i>
					<span className="image-button" >Upload File</span>
				</FlatButton>
			</Paper>
		);
	}
});
