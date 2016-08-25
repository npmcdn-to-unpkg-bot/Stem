var lastImgTagId = 0;

var ImageUpload = React.createClass({
	getInitialState: function() {
		return {
			imgTagId: 'imgTag-' + lastImgTagId++,
			imageLoaded: false
		};
	}, 
	componentDidMount: function() {
		$('#' + this.getId()).cropper({
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
	
		return this.props.id ? this.props.id : this.state.id;
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
			<div className="album-art-box col-xs-12">
				<div>
					<input 
					<input onChange={this.handleChangeFile} type="file" />
				</div>
				<div className="upload lg text-center">
					{ this.state.imageLoaded ? 
						<div className="upload-label update">
							<h3>Upload your album art</h3>
							<p>Recommended size: 1000x1000</p>
							<p>Full Size Limit: xMB</p>
						</div>
					:
						<div className="upload-label">
							<h3>Upload your album art</h3>
							<p>Recommended size: 1000x1000</p>
							<p>Full Size Limit: xMB</p>
						</div>
					}
					<img id={this.state.imgTagId} style={imageStyles} />
				</div>
				
			</div>
		);
	}
});

