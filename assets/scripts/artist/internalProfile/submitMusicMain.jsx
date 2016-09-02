var SubmitMusicMain = React.createClass({

	submitClicked: function() {
		var album = this.refs.submitMusicAlbum;
		var track = this.refs.submitMusicTrack;
		
		track.setState({
			isSubmitting: true
		});

		// TODO: The releaseDate and artist names should not have to be passed in; however, there's a discrepancy between
		// the API and the UI design, revisit this later
		return album.createAlbum(track.state.releaseDate)
			.then(function(res) {
				return track.createTracks(res, album.state.artistName);
			})
			.then(function(res) {
				console.log('Album/Track created successfully: ' + JSON.stringify(res));
				track.setState({
					isSubmitting: false
				});
			}, function(reason) {
				console.error('Error while creating album/track: ' + JSON.stringify(reason));
				track.setState({
					isSubmitting: false
				});
			});
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