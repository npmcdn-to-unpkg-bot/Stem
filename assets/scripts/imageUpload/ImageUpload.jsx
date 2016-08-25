var lastImageUploadId = 0;

var ImageUpload = React.createClass({
	getInitialState: function() {
		return {
			id: 'imageUpload-' + lastImageUploadId++,
			imageUrl: ''
		};
	}, 
	getId: function() {
		return this.props.id ? this.props.id : this.state.id;
	},
	handleChangeFile: function(ev) {
		var fileReader = new FileReader(),
			file = ev.target.files[0];
			//fileUrl = fileReader.readAsDataUrl(file);
				//URL.createObjectURL(file);
		
		fileReader.readAsDataUrl(file);
		fileReader.onloadend = function() {
			var cropperEl = $('#' + this.getId());
			cropperEl.cropper('reset').cropper('replace', fileReader.result);
		}.bind(this);
	},
	render: function() {
		var imageStyles = {
			maxWidth: '100%'
		};

		var uploadDivStyles = {
			marginBottom: '120px',
			paddingBottom: '120px',
			zIndex: 120
		};

		return (
		<div className="album-art-box col-xs-12">
			<div className="upload lg text-center">
				{this.state.imageUrl ? 
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
				<img id={this.getId()} style={imageStyles} />
			</div>
			<div style={uploadDivStyles}>
				<input 
					onChange={this.handleChangeFile} 
					type="file" />
			</div>
		</div>



		);
	}
});

