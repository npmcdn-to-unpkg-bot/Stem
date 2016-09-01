var SubmitMusicAlbum = React.createClass({
	getInitialState: function() {
		return {
			id: null,
			artistName: '',
			albumName: '',
			upc: '',
			albumArt: null
		};
	},
	handleUpcChange: function(ev) {
		this.setState({
			upc: ev.target.value
		});
	},
	handleArtistNameChange: function(ev) {
		this.setState({
			artistName: ev.target.value
		});
	},
	handleAlbumNameChange: function(ev) {
		this.setState({
			albumName: ev.target.value
		});
	},
	albumArtChange: function(image, origImage) {
		// TODO: Use the updated image and not the origImage
		this.setState({
			albumArt: origImage
		});
	},
	validate: function() {
		// TODO: Implement visual validation of controls
		
		return this.state.artistName && this.state.artistName.length > 0 &&
			this.state.albumName && this.state.albumName.length > 0 &&
			this.state.albumArt;
	},
	render: function() {
		return (
			<div className="submit-album-form pad-box-lg">
				<div className="submit-input-wrapper">
					<p>Artist Name</p>
					<input value={this.state.artistName} onChange={this.handleArtistNameChange} />
					<p>Album Name</p>
					<input value={this.state.albumName} onChange={this.handleAlbumNameChange} />
					<p>UPC</p>
					<input value={this.state.upc} onChange={this.handleUpcChange} placeholder="( optional )" />
				</div>
				<div className="submit-album-img mar-l-lg">
					<ImageUpload width="240" onImageChange={ this.albumArtChange }>
						<div className="upload-album-content">
					  		<i className="icon-picture-1 fa-5x"></i>
					  		<h4 className="pad-b-sm">Upload your album art</h4>
					  		<p>Recommended size: 1000x1000</p>
					  		<p>File Size Limit: xMB</p>
						</div>
					</ImageUpload>
				</div>  
			</div>
		);
	}
});