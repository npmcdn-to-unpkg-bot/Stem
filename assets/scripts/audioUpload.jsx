var lastAudioInputId = 0;

var AudioUpload = React.createClass({
	getInitialState: function() {
		return {
			audioInputId: 'audioInputId-' + lastAudioInputId++,
			isUploading: false,
			file: null
		};
	},
	getId: function() {
		return this.props.audioInputId || this.state.audioInputId;
	},
	handleFileSelect: function(ev) {
		// To avoid a warning from React about synthetic event reuse
		ev.persist();

		this.setState({
			isUploading: true
		});

		stemApi.upload({
			file: ev.target.files[0]
		}).then(function(response) {
			this.setState({
				isUploading: false,
				file: ev.target.files[0]
			});
			
			if (this.props.onAudioChanged) {
				this.props.onAudioChanged(response);
			}
		}.bind(this), function(error) {
			this.setState({
				isUploading: false
			});
			console.log('Audio Upload Error: ' + JSON.stringify(error));

		}.bind(this));
	},
	reset: function() {
		this.setState({
			isUploading: false,
			file: null
		});

		if (this.props.onAudioChanged) {
			this.props.onAudioChanged(null);
		}
	},
	render: function() {
		// This hides the input without removing it from the page
		var fileInputStyles = {
			width: '0.1px',
			height: '0.1px',
			opacity: '0',
			overflow: 'hidden',
			position: 'absolute',
			zIndex: '-1'
		};

		var file = this.state.file,
			element = <label htmlFor={ this.getId() } className="btn-primary pull-right">Browse for file</label>;

		if (this.state.isUploading) {
			element = <LoadingButton />;
		} else if (file) {
			var fileSize = (file.size / (1000000)).toFixed(2) + ' MB';
			element = <div className="loaded-track pull-right"><p>{file.name} ({fileSize})</p> 
        			  <i onClick={this.reset} className="icon-cancel pull-right"></i></div> ;
		}

		return (
			<div>
				{ /* This element is always hidden */ }
				<input id={ this.getId() } type="file" style={fileInputStyles} accept="audio/*" 
					onChange={this.handleFileSelect} />
				{element}
        	</div>
		);
	}
});