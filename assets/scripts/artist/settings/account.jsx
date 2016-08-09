var ArtistAccountSettings = React.createClass({
	getInitialState: function() {
		return {
			characterCount: 0,
			disableButton: false,
			profileImgURL: this.context.userInfo.profileImgURL,
			bannerImgURL: this.context.userInfo.bannerImgURL,
			profileName: this.context.userInfo.profileName,
			customLink: this.context.userInfo.customLink,
			email: this.context.userInfo.email,
			country: this.context.userInfo.country,
			timeZone: this.context.userInfo.timeZone,
			bio: this.context.userInfo.bio,
			errorMessage: ''
		}
	},

    handleFieldChange: function(e) {
    	var id = e.target.id;
        this.setState({
			[id]: e.target.value
		});
    },

 	handleFileUpload: function(e) {
 		console.log(JSON.stringify(e.target.value));
	    e.preventDefault();
    	
    	var id = e.target.id,
    		reader = new FileReader(),
			file = e.target.files[0];

		reader.onloadend = () => {
			if([id] == 'profileImg') {
				this.setState({
					profileImg: file,
					profileImgURL: reader.result
				});
			} else {
				this.setState({
					bannerImg: file,
					bannerImgURL: reader.result
				});
			}
		}
	    reader.readAsDataURL(file)
	    this.saveFile(file);
    },

    saveFile: function(file) {
        stemApi.upload({
            request: {
                file: file
            },
            success: function (response) {
				console.log('success!');
				console.log(JSON.stringify(response, null, 2));

                stemApi.updateAccount({
                    request: { "ProfileImageUploadId": response.id },
                    success: function (response) { console.log(JSON.stringify(response, null, 2)); },
                    error: function (response) { console.log("Failed to upload."); }
                });
            },
            error: function (response) {
				console.error(JSON.stringify(response, null, 2));
	            self.setErrorMessage(errorMessage);	
            }
        });
    },

	handleLineGrow: function(e) {
    	var id = e.target.id;
        this.setState({
			[id]: e.target.value
		});

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

	handleSave: function() {
		var self = this;

        stemApi.updateAccount({
            request: {
				"general": {
					"profileName": this.state.profileName,
					"customLink": this.state.customLink,
					"email": this.state.email,
					"bio": this.state.bio
				}
            },
			success: function(response) {
				console.log('success!');
				console.log(JSON.stringify(response, null, 2));
				store.dispatch({
					type: 'UpdateUserRecord',
					data: {userInfo: response, currentPage: 5}
				});
			},
            error: function (response) {
				console.error(JSON.stringify(response, null, 2));
	            self.setErrorMessage(errorMessage);	
            }
        });
	},

	render: function() {
		var self = this;

		return (
			<div className="artist-password-wrapper col-xs-12">
				<div className="col-xs-12">
					<h3>Account</h3>
					<h5>Update your account settings</h5>
				</div>
				<div className="col-xs-12 col-md-3 pad-box-md" >
					<div className="upload circle text-center">
						{this.state.profileImgURL ? 
							<div className="upload-label update">
								<h5>UPDATE PROFILE IMAGE</h5>
								<p>Suggested Size 1000x1000</p>
							</div>
						:
							<div className="upload-label">
								<h5>UPLOAD PROFILE IMAGE</h5>
								<p>Suggested Size 1000x1000</p>
							</div>
						}
						<img src={this.state.profileImgURL} />
						<input onChange={this.handleFileUpload} type="file" name="profileImg" id="profileImg" />
					</div>  
				</div>
				<div className="col-xs-12 col-md-9 pad-b-md">
					<div className="upload text-center">
						{this.state.bannerImgURL ? 
							<div className="upload-label update">
								<h5>UPDATE BANNER IMAGE</h5>
								<p>Suggested Size 1000x1000</p>
							</div>
						:
							<div className="upload-label">
								<h5>UPLOAD BANNER IMAGE</h5>
								<p>Suggested Size 1000x1000</p>
							</div>
						}
						<img src={this.state.bannerImgURL} />
						<input onChange={this.handleFileUpload} type="file" name="bannerImg" id="bannerImg" />
					</div>
				</div>   
				<div className="row no-gutters col-xs-12 col-md-6 col-lg-5 pad-t-md">
					<h5>Profile Name</h5>
					<input id="profileName" onChange={this.handleFieldChange} value={this.state.profileName} /> 
					<h5>Custom Link</h5>
					<input id="customLink" onChange={this.handleFieldChange} value={this.state.customLink} />
					<p>http://stem.com/myprofile</p>
					<h5>Email</h5>
					<input id="email" type="email" onChange={this.handleFieldChange} value={this.state.email} />
					<h5 className="strike">Country</h5>
					<input id="country" onChange={this.handleFieldChange} value={this.state.country} />
					<h5 className="strike">TimeZone</h5>
					<input id="timeZone" onChange={this.handleFieldChange} value={this.state.timeZone} />
				</div>

				<div className="col-xs-12 col-sm-12 col-md-8 pad-t-sm pad-b-sm">
					<h5>Biography</h5>
					<textarea id="bio" className="form-input" onChange={self.handleLineGrow} value={this.state.bio} />
					<div className="character-count row no-gutters ">
						<p>300 Characters</p>
							<svg height="20" width="400">
								<line className="svg-line2" x1="300" y='0' />
								<line className="svg-line" x1={self.state.characterCount} y='0' />
							</svg>
						{this.state.characterCount}
					</div>  
				</div> 

				{ this.state.errorMessage != '' ?
					<span className="error">{this.state.errorMessage}</span>
				: null }

				<div className="col-xs-12"> 
					<div className="pull-right">
						<button type="button" onClick={this.handleSave} className="btn btn-sm btn-primary" disabled={this.state.disableButton}>
							<span className="icon-ok-circle"> </span> Save
						</button>
					</div>
				</div>
			</div> 
		)
	}
});

ArtistAccountSettings.contextTypes = {
	baseAPI: React.PropTypes.string,
	authToken: React.PropTypes.string,
	userInfo: React.PropTypes.object
};