var lastImageUploadId = 0;

var ImageUpload = React.createClass({
	getInitialState: function() {
		return {
			id: 'imageUpload-' + lastImageUploadId++,
			imageUrl: ''
		};
	},
	componentDidMount: function() {

	},
	getId: function() {
		return this.props.id ? this.props.id : this.state.id;
	},
	handleChangeFile: function(ev) {
		// var fileReader = new FileReader(),
		// 	file = ev.target.files[0];

		// fileReader.onloadend = function() {
		// 	this.setState({
		// 		imageUrl: fileReader.result,
		// 	});
		// }.bind(this);

		// fileReader.readAsDataURL(file);
	},
	render: function() {
		return (
			<div id={this.getId()}>
			</div>
		);
	}
});

