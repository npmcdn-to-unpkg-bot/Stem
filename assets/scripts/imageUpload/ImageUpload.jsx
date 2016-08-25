var lastImgTagId = 0;

var ImageUpload = React.createClass({
	getInitialState: function() {
		return {
			imgTagId: 'imgTag-' + lastImgTagId++,
			imageLoaded: false
		};
	}, 
	componentDidMount: function() {
		$('#' + this.state.imgTagId).cropper({
			guides: false,
			center: true,
			background: false,
			movable: false,
			rotatable: false,
			zoomable: false
		}).on('crop.cropper', function(ev) {
			var imageData = $(ev.target)
				.cropper('getCroppedCanvas')
				.toDataURL();

			this.props.onImageChange(imageData);
		}.bind(this));
	},
	
	handleChangeFile: function(ev) {
		var fileReader = new FileReader(),
			file = ev.target.files[0];
		
		if (file) {
			fileReader.readAsDataURL(file);
			fileReader.onloadend = function() {
				var cropperEl = $('#' + this.state.imgTagId);
				cropperEl.cropper('replace', fileReader.result);
				this.setState({
					imageLoaded: true
				});

			}.bind(this);
		}
	},
	render: function() {
		// This is important for the image cropper control, remove at your own risk
		var imageStyles = {
			maxWidth: '100%'
		};

		return (
			<div>
				<img id={this.state.imgTagId} style={imageStyles} />
				<input onChange={this.handleChangeFile} type="file" />
			</div>);
	}
});

