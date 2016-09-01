var SubmitMusicTrack = React.createClass({
	getInitialState: function() {
		return {
			genreTag: null,
		  	genreTagValues: [],
		  	addedTracks: [],
		  	isSubmitting: false,

			track: {
				trackName: null,
				trackNumber: 0,
				isExplicit: false,
		  		isrc: null,
		  		releaseDate: null,
		  		additionalCredits: null,
		  		audioFile: null,
		  		selectedGenres: null
		  	}
		  	
		}
	},
	componentDidMount: function() {
		stemApi.getAllTagTypes()
			.then(function(res) {
				var genreTag = res.find(function(item) {
					return item.systemType === Tag.SystemType.Genre;
				});

				this.setState({
					genreTag: genreTag
				});

				return stemApi.getTagValues({
					tagTypeId: genreTag.id
				});

			}.bind(this))
			.then(function(res) {
				this.setState({
					genreTagValues: res
				});

			}.bind(this), function(reason) {
				console.log('Error fetching all tag types: ' + JSON.stringify(reason));
			});

	},
	onAudioChanged: function(file) {
		var newState = { track: this.state.track };
		newState.track.audioFile = file;

		this.setState(newState);
	},
	handleInputChanged(ev) {
		var newState = { track: this.state.track };

		newState.track[ev.target.name] = ev.target.value;
		this.setState(newState);
	},
	genreTagsUpdated: function(selections) {
		var newState = {
			track: this.state.track
		};

		newState.track.selectedGenres = selections;

		this.setState(newState);
	},
	onAddClicked: function() {
		this.addedTracks.push(this.state.track);
	},
	validate: function() {
		// TODO: Implement visual validation later
		return this.state.track.trackName && this.state.track.trackName.length > 0 && 
		  	this.state.track.audioFile && 
		  	this.state.track.selectedGenres && this.state.track.selectedGenres.length > 0;
	},
	createTrack: function(album, artistName) {
		var track = this.state.track;
		var deferred = $.Deferred();

		if (this.validate()) {
			// NOTE: artistName is set at the album level
			return stemApi.createSong({
				artistName: artistName,
				name: track.trackName,
				trackNumber: track.trackNumber,
				albumId: album.id,
				songFileId: track.audioFile.id,
				// NOTE: We currently don't have a field for this
				bpm: 0,
				tagIds: track.selectedGenres.map(function(item) {
					return item.id;
				})
			});
		} else {
			deferred.reject('The track is not valid, please add/fix fields before continuing');
			return deferred.promise();
		}
	},
	render: function() {
		return (
			<div className="submit-track-wrapper">
				{ this.state.addedTracks.map(function(item) {
					return (<SubmitTrackEdit playerStateVisible="true" track={item} />);
				})}

				<div className="submit-track-name col-lg-6">
					<p>Track Name</p>
					<input name="trackName" onChange={ this.handleInputChanged } />
					<AudioUpload onAudioChanged={ this.onAudioChanged } />
				</div>
				<div className="col-lg-6">
					<p>ISRC # <a>Whats an ISRC#?</a></p>
					<input name="isrc" onChange={ this.handleInputChanged } placeholder="( optional )" />
				</div> 
				<div className="col-lg-6">
					<p>Release Date - MM/DD/YY</p>
					<input name="releaseDate" onChange={ this.handleInputChanged } placeholder="( optional )" />
				</div>
				<div className="col-lg-6">
					<p>Additionl Credits</p>
					<input name="additionalCredits" onChange={ this.handleInputChanged } placeholder="( optional )" />
				</div>
				<div className="col-lg-6">
					<TagSelector tag={ this.state.genreTag } tagList={ this.state.genreTagValues } onSelectionsChange={ this.genreTagsUpdated } />
				</div>
				<div className=" pad-b-sm col-xs-12">
					<p>Lyrics<a>Why upload lyrics?</a></p>
					<textarea onChange={ this.handleInputChanged } placeholder="Paste your lyrics here.." />
				</div>
				<div className="explicit-checkbox pad-b-lg col-xs-12 red">
					<input type="checkbox" name="explicit" onChange={ this.handleInputChanged } />
				  	<h5 className="pad-l-sm">EXPLICIT</h5>
				</div> 
				{ this.props.isAdmin ? 
					<div className="admin-state-btn-wrapper">
				        <ul>
							<li>
								<div className="pending-state">Pending</div>
							</li>
							<li>
								<div className="approved-state">Approved</div>
							</li>
							<li>
								<div className="live-state">Live</div>
							</li>
							<li>
								<div className="save-state">Save & Close</div>
							</li>
				        </ul>
				    </div> : 
					<div className="submit-btns">
						<div className="submit-btns">
					        <button className="additional-track-btn mar-r-md" onClick={ this.props.onAddClicked }>
					        	<i className="icon-plus-circled"></i> Add Additional Tracks
					        </button>

					        { this.state.isSubmitting ? <LoadingButton /> : 
						        <button className="btn-primary" onClick={ this.props.onSubmitClicked }>
						        	<i className="icon-ok-circled2"></i> Submit
						        </button>
						    }
				      	</div>
					</div>
				}
			</div>
		);
	}
});