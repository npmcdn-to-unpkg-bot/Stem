var UploadForm = React.createClass({
	
	getInitialState: function() {
		// Although I'm calling this a Promise, it most certainly is not and should be replaced by an actual one later
		var albumNamesPromise = function(success, fail) {
			stemApi.getAlbumsByArtist({
				request: {
					artistId: this.context.userInfo.id
				},
				success: function (response) {
					this.setState({ albums: response });
					success(response.map(function(item) {
						return item.name; 
					}));
				}.bind(this),

				error: function (response) {
					console.error(JSON.stringify(response, null, 2));

					if (fail) {
						fail(response);
					}
				}
			});
		};

		return {
			singleTrack: true,
			characterCount: 0,
			disableButton: false,
			errorMessage: '',
			albumListVisible: false,
			albumSelection: '',
			albums: [],
			albumNamesPromise: albumNamesPromise.bind(this),
			selectedAlbum: {},
			
			audioFile: undefined,
			audioFileName: '',
			artFile: undefined,
			artFileURL: '',
			artistName: '',
			songName: '',
			albumName: '',
			promotionalLink: '',
			promotionalCopy: '',
			albumArtFileId: 0,
			songFileId: 0,

			displayAdditional: false
		}
	},

	uploadFormToggle: function() {
		if ( this.state.singleTrack == false) {
			this.setState({ singleTrack: true });
		} else {
			this.setState({ singleTrack: false});
		}  
	},

	handleShowAlbumList: function() {
		this.setState({
			albumListVisible: true
		})
	},

	handleLineGrow: function(e) {
		 if (e.target.value.length == 0) {
			this.setState({characterCount: 0});
		 }
		 if (e.target.value.length > this.state.characterCount) {
			this.setState({characterCount: e.target.value.length});
			this.setState({disableButton: false});

			if (this.state.characterCount >= 300) {
				this.setState({characterCount: e.target.value.length});
				this.setState({disableButton: true});
				alert("You can only have up to 300 characters! You are " + (e.target.value.length - 300) + " characters over");
			}
			if (this.state.characterCount <= 300) {
				this.setState({disableButton: false});
			}

		 } else {
			this.setState({characterCount: this.state.characterCount - (this.state.characterCount - e.target.value.length)});
				if (e.target.value.length == 0) {
					this.setState({characterCount: 0});
				}
		 }
	},

	showHideNotice: function() {
		if(this.state.displayNotice) {
			this.setState({ displayNotice: false });
		} else {
			this.setState({ displayNotice: true });
		}
	},

	handleFieldChange: function(e) {
		var id = e.target.id;
		
		this.setState({
			[id]: e.target.value
		});

		if (id === 'albumName') {
			this.setState({ 
				selectedAlbum: this.state.albums.find(function(item) {
					return item.name === e.target.value;
				}) || {}
			});
		}

		console.log(id); 
	},

	handleFileUpload: function(e) {
		e.preventDefault();
		
		var id = e.target.id,
			reader = new FileReader(),
			file = e.target.files[0];

		reader.onloadend = () => {
			if([id] == 'audioFile') {
				this.setState({
					audioFile: file,
					audioFileName: file.name,
				});
			} else {
				this.setState({
					artFile: file,
					artFileURL: reader.result
				});
			}
		}
		reader.readAsDataURL(file);
	},

	// TODO: This is for the image upload control
	handleImageChange: function(imageURL) {
		this.setState({
			artFile: imageURL
		});
	},

	saveAudioFile: function() {
		stemApi.upload({
			request: {
				file: this.state.audioFile
			},
			success: function (response) {
				console.log('success!');
				console.log(JSON.stringify(response, null, 2));

				if (!this.state.selectedAlbum.id) { 
					this.saveArtFile(response.id);
				} else {
					this.updateRecord(response.id, undefined);
				}
			}.bind(this),
			error: function (response) {
				console.error(JSON.stringify(response, null, 2));
				this.setErrorMessage(errorMessage);	
			}.bind(this)
		});
	},

	saveArtFile: function(id) {
		var self = this;

		stemApi.upload({
			request: {
			    file: this.state.artFile
			},
			success: function (response) {
				console.log('success!');
				console.log(JSON.stringify(response, null, 2));
				self.updateRecord(id, response.id);
			},
			error: function (response) {
				console.error(JSON.stringify(response, null, 2));
				self.setErrorMessage(errorMessage);	
				}
		});
	},

	createSong: function(albumId, songFileId) {
		stemApi.createSong({
			request: {
				albumId: albumId,
				artistName: this.state.artistName,
				name: this.state.songName,
				trackNumber: 1, // TODO: Update this to actually calculate the correct track number
				songFileId: songFileId
			},
			success: function (response) {
				console.log('success!');
				console.log(JSON.stringify(response, null, 2));
			},
			error: function (response) {
				console.error(JSON.stringify(response, null, 2));
				this.setErrorMessage(errorMessage);	
			}.bind(this)
		});
	},

	updateRecord: function(songFileId, artId) {

		if (this.state.selectedAlbum.id) {
			this.createSong(this.state.selectedAlbum.id, songFileId);
			return;
		}

		stemApi.createAlbum({
			request: {
				name: this.state.albumName,
				artFileId: artId,
				releaseDate: new Date()
			},
			success: function (response) {
				console.log('success!');

				this.createSong(response.id, songFileId);

				console.log(JSON.stringify(response, null, 2));
			
			}.bind(this),
			error: function (response) {
				console.error(JSON.stringify(response, null, 2));
				this.setErrorMessage(errorMessage);	
			}.bind(this)
		});
	},
	showAdditionalArtist: function() {
		if (this.state.displayAdditional == false) {
			this.setState({ displayAdditional: true });
		} else {
			this.setState({ displayAdditional: false });
		}
	},
	render: function () {
		var self = this;
		return (
			<div className="col-xs-12">
				<a className="h3 upload-links col-xs-4" onClick={this.uploadFormToggle}>
					<span className={this.state.singleTrack ? "upload-active-underline" : null}> Individual Song </span>
				</a>
				<a className="h3 upload-links col-xs-3" onClick={this.uploadFormToggle}>
					<span className={this.state.singleTrack ? null : "upload-active-underline" }> Album </span>
				</a>

				<div className="col-xs-12 pad-t-md">
					<div className="drag-drop text-center">
						<div className="drag-drop-label">
							<h4>
								<span className="icon-folder"></span> 
								Drag and drop audio files or <a>Browse</a> your computer
							</h4>
							<h6>{this.state.audioFileName}</h6>
						</div>
						<input onChange={this.handleFileUpload} type="file" name="audioFile" id="audioFile" />
					</div>
				</div>
				<div className="artist-upload col-xs-12 col-lg-6 row no-gutters">
					<div className="col-xs-12">
						<p>Artist Name</p>
						<input id="artistName" onChange={this.handleFieldChange} value={this.state.artistName} /> 
						<div className={this.state.displayAdditional ? "additional-artist display-true" : "display-false"}>
							<ul>
								<li><p>Stevie Wonder<i className="icon-cancel pull-right"></i></p></li>
								<li><p>Randy Newman<i className="icon-cancel pull-right"></i></p></li>
								<li><p>Paul Blart<i className="icon-cancel pull-right"></i></p></li>
								<input placeholder="Add Artist..." />
							</ul>
						</div>
						<a onClick={this.showAdditionalArtist}><span className="artist-add-artist-link glyphicon glyphicon-plus-sign"></span> Add Additional Artists</a>
					</div> 
					<div className="col-xs-12">
						<p>Song Name</p>
						<input id="songName" onChange={this.handleFieldChange} value={this.state.songName} /> 
					</div>
					<div className="col-xs-12">
						<p>Album Name</p>
						<AutoCompleteTextBox id="albumName" onChange={this.handleFieldChange} options={this.state.albumNamesPromise} />
					</div>
					<div className="col-xs-12">
						<p>Promotion Link <span className="icon-help-circled"></span></p>
						<input id="promotionalLink" onChange={this.handleFieldChange} value={this.state.promotionalLink} /> 
					</div>
				</div>
				<div className="col-xs-12 col-lg-6 row no-gutters">
					<div className="album-art-box col-xs-12">
						<div className="upload lg text-center">
							{this.state.artFileURL ? 
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
							<img src={this.state.artFileURL} />
							<input onChange={this.handleFileUpload} disabled={this.state.selectedAlbum.id} type="file" name="artFileURL" id="artFile" />
							
						</div>
					</div>
				</div>
				<div className="artist-upload col-xs-12">
					<p>Promotional Copy ( you can edit this later )</p>
					<textarea id="promotionalCopy" className="form-input" onChange={self.handleLineGrow} />
					<div className="character-count col-sm-12 row no-gutters ">
						<p className="col-xs-4 col-lg-2">{this.state.characterCount}/300 Characters</p>
						<svg className="col-xs-8" height="20" width="400">
							<line className="svg-line2" x1="300" y='0' />
							<line className="svg-line" x1={self.state.characterCount} y='0' />
						</svg>
					</div>  
				</div>
				<div className="col-xs-12">
					<button type="button" onClick={this.saveAudioFile} className="btn artist-upload-btn pull-right">
						<h4><span className='icon-upload'></span> Upload</h4>
					</button>
				</div>
				
				<a onClick={this.showHideNotice}>notice test</a>
				{ this.state.displayNotice ? <ArtistTaggedSuccess showHideNotice={self.showHideNotice} /> : null }
			</div>  
		)
	}
});

UploadForm.contextTypes = {
    userInfo: React.PropTypes.object
};
