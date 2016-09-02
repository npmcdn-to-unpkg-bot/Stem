var SubmitMusicTrack = React.createClass({
	getInitialState: function() {
		return {
			genreTag: null,
		  	genreTagValues: [],
		  	addedTracks: [],
		  	isSubmitting: false,

			id: null,
			trackName: '',
			trackNumber: 0,
			isExplicit: false,
	  		isrc: '',
	  		releaseDate: '',
	  		additionalCredits: '',
	  		audioFile: null,
	  		selectedGenres: null,
	  		lyrics: ''
		}
	},
	getTrackState: function() {
		return {
			id: this.state.id,
			trackName: this.state.trackName,
			trackNumber: this.state.trackNumber,
			isExplicit: this.state.isExplicit,
	  		isrc: this.state.isrc,
	  		releaseDate: this.state.releaseDate,
	  		additionalCredits: this.state.additionalCredits,
	  		audioFile: this.state.audioFile,
	  		selectedGenres: this.state.selectedGenres ? 
	  			[].concat(this.state.selectedGenres) : null,
	  		lyrics: this.state.selectedGenres
		};
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
		this.setState({
			audioFile: file
		});
	},
	handleInputChanged(ev) {
		var newState = {};

		newState[ev.target.name] = ev.target.value;
		this.setState(newState);
	},
	genreTagsUpdated: function(selections) {
		this.setState({
			selectedGenres: selections
		});
	},
	onAddClicked: function() {
		// Make a deep copy of our state
		var trackCopy = this.getTrackState();
		
		this.setState({	
			addedTracks: this.state.addedTracks.concat(trackCopy),
			id: null,
			trackName: '',
			trackNumber: 0,
			isExplicit: false,
	  		isrc: '',
	  		releaseDate: '',
	  		additionalCredits: '',
	  		audioFile: null,
	  		selectedGenres: null,
	  		lyrics: ''
		});

		this.refs.audioUpload.reset(false);
		this.refs.tagSelector.reset();
	},
	onEditTrack: function(track) {
		this.setState({
			id: track.id,
			trackName: track.trackName,
			trackNumber: track.trackNumber,
			isExplicit: track.isExplicit,
	  		isrc: track.isrc,
	  		releaseDate: track.releaseDate,
	  		additionalCredits: track.additionalCredits,
	  		audioFile: track.audioFile,
	  		selectedGenres: track.selectedGenres,
	  		lyrics: track.lyrics
		});
	},
	validate: function() {
		// TODO: Implement visual validation later
		return this.state.trackName && this.state.trackName.length > 0 && 
		  	this.state.audioFile && 
		  	this.state.selectedGenres && this.state.selectedGenres.length > 0;
	},
	createTracks: function(album, artistName) {
		var deferred = $.Deferred();

		if (this.validate()) {
			for (var i = 0; i < this.state.addedTracks.length; i++) {
				var item = this.state.addedTracks[i];

				if (!item.id) {
					stemApi.createSong({
						artistName: artistName,
						name: item.trackName,
						trackNumber: item.trackNumber,
						albumId: album.id,
						songFileId: item.audioFile.response.id,
						// NOTE: We currently don't have a field for this
						bpm: 0,
						tagIds: item.selectedGenres.map(function(genreItem) {
							return genreItem.id;
						})
					})
					.then(function(res) {
						item.id = res.id;

						console.log('Track Created: ' + JSON.stringify(res));
						
						return res;
					}.bind(this), function(reason) {
						deferred.reject(reason);
					});
				}

				if (deferred.state() === 'rejected') {
					return deferred.promise();
				}
			}

			// NOTE: artistName is set at the album level
			return stemApi.createSong({
				artistName: artistName,
				name: this.state.trackName,
				trackNumber: this.state.trackNumber,
				albumId: album.id,
				songFileId: this.state.audioFile.response.id,
				// NOTE: We currently don't have a field for this
				bpm: 0,
				tagIds: this.state.selectedGenres.map(function(item) {
					return item.id;
				})
			})
			.then(function(res) {
				this.setState({
					id: res.id
				});

				return res;
			}.bind(this));
		} else {
			deferred.reject('The track is not valid, please add/fix fields before continuing');
			return deferred.promise();
		}
	},
	render: function() {

		return (
			<div className="submit-track-wrapper">
				<SubmitTrackEdit playerStateVisible="true" tracks={ this.state.addedTracks } onEditTrack={ this.onEditTrack } />

				<div className="submit-track-name col-lg-6">
					<p>Track Name</p>
					<input name="trackName" value={ this.state.trackName } onChange={ this.handleInputChanged } />
					<AudioUpload ref="audioUpload" onAudioChanged={ this.onAudioChanged } />
				</div>
				<div className="col-lg-6">
					<p>ISRC # <a>Whats an ISRC#?</a></p>
					<input name="isrc" value={ this.state.isrc } onChange={ this.handleInputChanged } placeholder="( optional )" />
				</div> 
				<div className="col-lg-6">
					<p>Release Date - MM/DD/YY</p>
					<input name="releaseDate" value={ this.state.releaseDate } onChange={ this.handleInputChanged } placeholder="( optional )" />
				</div>
				<div className="col-lg-6">
					<p>Additionl Credits</p>
					<input name="additionalCredits" value={ this.state.additionalCredits } onChange={ this.handleInputChanged } placeholder="( optional )" />
				</div>
				<div className="col-lg-6">
					<TagSelector ref="tagSelector" tag={ this.state.genreTag } tagList={ this.state.genreTagValues } onSelectionsChange={ this.genreTagsUpdated } />
				</div>
				<div className=" pad-b-sm col-xs-12">
					<p>Lyrics<a>Why upload lyrics?</a></p>
					<textarea name="lyrics" value={ this.state.lyrics } onChange={ this.handleInputChanged } placeholder="Paste your lyrics here.." />
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
					        <button className="additional-track-btn mar-r-md" onClick={ this.onAddClicked }>
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