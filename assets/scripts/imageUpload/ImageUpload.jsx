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
			viewMode: 3,
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
		// The maxWidth style is important for the image cropper control, remove at your own risk
		var imageStyles = {
			maxWidth: '100%',
			height: 'auto',
			width: this.props.width + 'px',
			display: this.state.imageLoaded ? 'initial' : 'none'
		};

		return (
			<div>
				<img id={this.state.imgTagId} style={imageStyles} />
				{ !this.state.imageLoaded ? this.props.children : null }
				<input onChange={this.handleChangeFile} type="file" />
			</div>
		);
	}
});

