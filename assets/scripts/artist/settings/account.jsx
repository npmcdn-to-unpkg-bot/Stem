var ArtistAccountSettings = React.createClass({
	getInitialState: function() {
		return {
			characterCount: 0,
			disableButton: false,
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
		var self = this,
			data = {
				"general": {
					"profileName": this.state.profileName,
					"customLink": this.state.customLink,
					"email": this.state.email,
					"bio": this.state.bio
				}
			};
		console.log('data = ' + JSON.stringify(data));

		$.ajax({
			type: "PUT",
			url: this.context.baseAPI + '/Account',
			headers: {'Authorization': this.context.authToken},
			contentType: "application/json; charset=utf-8",
			dataType: 'json',
			data: JSON.stringify(data),
			success: function (response) {
				console.log('success!');
				console.log(JSON.stringify(response, null, 2));
				store.dispatch({
					type: 'UpdateUserRecord',
					data: {userInfo: response, currentPage: 5}
				});
			},
			error: function(response) {
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
				<div className="artist-account-setting-upload-wrapper col-sm-12 col-md-3 col-lg-3" >
					<div className="col-sm-offset-4 col-md-offset-0 col-lg-12 col-lg-offset-0">
						<a>
							<div className="artist-account-setting-profile-img text-center">
								<h5 className="shape-details">UPLOAD PROFILE IMAGE</h5>
								<p className="shape-details">Suggested Size 1000x1000</p>
							</div>
						</a>
					</div>  
				</div>
				<div className="artist-account-setting-upload-wrapper col-sm-12 col-md-9">
					<div className="">  
						<a>
							<div className="artist-account-setting-profile-banner-img text-center">
								<h5 className="shape-details">UPLOAD BANNER IMAGE</h5>
								<p className="shape-details">Suggested Size 1000x1000</p>
							</div>
						</a>
					</div>
				</div>   
				<div className="row no-gutters col-sx-12 col-md-6 col-lg-5 pad-t-md">
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

				<div className="col-sx-12 col-sm-12 col-md-8 pad-t-sm pad-b-sm">
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