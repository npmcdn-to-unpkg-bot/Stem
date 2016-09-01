var SubmitMusicMain = React.createClass({
	createTrack: function(album, trackState, artistName) {
		// NOTE: artistName is set at the album level
		return stemApi.createSong({
			artistName: artistName,
			name: trackState.trackName,
			trackNumber: trackState.trackNumber,
			albumId: album.id,
			songFileId: trackState.audioFile.id,
			// NOTE: This doesn't get set on our url
			bpm: 0,
			tagIds: trackState.selectedGenres.map(function(item) {
				return item.id;
			})
		}).then(function(res) {
			alert('The song was created successfully: ' + JSON.stringify(res));
		}, function(error) {
			console.error('Error occurred while creating the song: ' + JSON.stringify(error));
		});
	},

	submitClicked: function() {
		var albumState = this.refs.submitMusicAlbum.state;
		var trackState = this.refs.submitMusicTrack.state;
		
		if (!albumState.id) {
			if (this.refs.submitMusicAlbum.validate() && 
				this.refs.submitMusicTrack.validate()) {
				stemApi.upload({
					file: albumState.albumArt
				}).then(function(res) {
					return stemApi.createAlbum({
						name: albumState.albumName,
						releaseDate: trackState.releaseDate || new Date(),
						artFileId: res.id
					});
				}).then(function(res) {
					return this.createTrack(res, trackState, albumState.artistName);
				}.bind(this));

				
			} else {
				alert('The album or track is not valid, please fix the fields, or add stuff');
			}
		} 

		// Delegate to track
	},
    render: function () {
        return (
            <div className="artist-internal-wrapper-fluid pad-b-lg">
                <div className="bg-white">  
                    <div>
                        <div className="pad-box-lg">
                            <h3>Submit Music</h3>
                            <p>Add music to your library</p>
                        </div>    
                        <SubmitMusicAlbum ref="submitMusicAlbum" />
                        <SubmitMusicTrack ref="submitMusicTrack" onSubmitClicked={this.submitClicked} />
                    </div>    
                </div>     
            </div>
        );
    }
});