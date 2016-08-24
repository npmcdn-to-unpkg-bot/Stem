var PlaylistTable = React.createClass({
	getInitialState: function() {
		return {
			displayPlayer: false,
			displayNotice: false,
			displayEdit: false,
			displayAdmin: false,
			displayArtistTaggedSuccess: false,
			displayUploadSuccess: false,
			red: false
		}
	},

	showHidePlayer: function() {
		if(this.state.displayPlayer) {
			this.setState({ displayPlayer: false });
		} else {
			this.setState({ displayPlayer: true });
		}
	},

	showHideNotice: function() {
		if(this.state.displayNotice) {
			this.setState({ displayNotice: false });
		} else {
			this.setState({ displayNotice: true });
		}
	},	
	showHideEdit: function() {
		if(this.state.displayEdit) {
			this.setState({ displayEdit: false });
		} else {
			this.setState({ displayEdit: true });
		}
	},	
	showHideAdminDashboard: function() {
		if(this.state.displayAdminDashboard) {
			this.setState({ displayAdminDashboard: false });
		} else {
			this.setState({ displayAdminDashboard: true });
		}
	},
	showHideArtistTaggedSuccess: function() {
		if(this.state.displayArtistTaggedSuccess) {
			this.setState({ displayArtistTaggedSuccess: false });
		} else {
			this.setState({ displayArtistTaggedSuccess: true });
		}
	},
	showHideUploadSuccess: function() {
		if(this.state.displayUploadSuccess) {
			this.setState({ displayUploadSuccess: false });
		} else {
			this.setState({ displayUploadSuccess: true });
		}
	},
	showHidePaymentProcessingPage: function() {
		if(this.state.displayPaymentProcessingPage) {
			this.setState({ displayPaymentProcessingPage: false });
		} else {
			this.setState({ displayPaymentProcessingPage: true });
		}
	},
	showHidePaymentOptions: function() {
		if(this.state.displayPaymentOptions) {
			this.setState({ displayPaymentOptions: false });
		} else {
			this.setState({ displayPaymentOptions: true });
		}
	},
	showHideWelcomeModal: function() {
		if(this.state.displayWelcomeModal) {
			this.setState({ displayWelcomeModal: false });
		} else {
			this.setState({ displayWelcomeModal: true });
		}
	},
	handleLike: function (event) {
		if (event.currentTarget.className == "icon-heart-empty fa-2x" ) {
	  		event.currentTarget.className = "icon-heart red fa-2x";
		}
  },
	render: function() {
		var self = this;

		return(
			<div className="playlist-wrapper content">
				<table className="col-xs-12 table no-borders">
					<thead>
						<tr>
							<th className="col-md-3 pad-b-md"><h4>Track/Artist</h4></th>
							<th className="col-md-2 pad-b-md"><h4>Album</h4></th>
							<th className="col-md-1 pad-b-md"><h4>Time</h4></th>
							<th className="col-md-2 pad-b-md"><h4>Downloads</h4></th>
							<th className="col-md-2 pad-b-md"><h4>Loves</h4></th>
							<th className="col-md-2 pad-b-md"><h4>Options</h4></th>
						</tr>	
					</thead>
					<tbody>
						<tr>
							<td className="col-md-3">
								<img className="mobile-img-thumbnail mar-r-md" src="https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg" />
								<div className="playlist-detail-info">
									<h4>Cool Kids</h4>
									<p>Echosmith</p>
								</div> 
							</td>

							<td className="col-md-2">
								<p>Talking Dreams</p>              
							</td>

							<td className="col-md-1">
								<p>3:26</p>              
							</td>

							<td className="col-md-1">
								<p>1,266</p>              
							</td>

							<td className="col-md-2">
								<span onClick={this.handleLike} className={ this.state.red ? "icon-heart red fa-2x" : "icon-heart-empty fa-2x"}></span>            
							</td>

							<td className="col-md-3">
								<a><span className="icon-heart fa-2x"></span></a>
								<a><span className="icon-plus-circle fa-2x"></span></a>
							</td>
						</tr>
						<tr>
							<td className="col-md-3">
								<img className="mobile-img-thumbnail mar-r-md" src="https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg" />
								<div className="playlist-detail-info">
									<h4>Cool Kids</h4>
									<p>Echosmith</p>
								</div> 
							</td>

							<td className="col-md-2">
								<p>Talking Dreams</p>              
							</td>

							<td className="col-md-1">
								<p>3:26</p>              
							</td>

							<td className="col-md-1">
								<p>1,266</p>              
							</td>

							<td className="col-md-2">
								<span onClick={this.handleLike} className={ this.state.red ? "icon-heart red fa-2x" : "icon-heart-empty fa-2x"}></span>            
							</td>

							<td className="col-md-3">
								<a><span className="icon-heart fa-2x"></span></a>
								<a><span className="icon-plus-circle fa-2x"></span></a>
							</td>
						</tr>
						<tr>
							<td className="col-md-3">
								<img className="mobile-img-thumbnail mar-r-md" src="https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg" />
								<div className="playlist-detail-info">
									<h4>Cool Kids</h4>
									<p>Echosmith</p>
								</div> 
							</td>

							<td className="col-md-2">
								<p>Talking Dreams</p>              
							</td>

							<td className="col-md-1">
								<p>3:26</p>              
							</td>

							<td className="col-md-1">
								<p>1,266</p>              
							</td>

							<td className="col-md-2">
								<span onClick={this.handleLike} className={ this.state.red ? "icon-heart red fa-2x" : "icon-heart-empty fa-2x"}></span>            
							</td>

							<td className="col-md-3">
								<a><span className="icon-heart fa-2x"></span></a>
								<a><span className="icon-plus-circle fa-2x"></span></a>
							</td>
						</tr>
						<tr>
							<td className="col-md-3">
								<img className="mobile-img-thumbnail mar-r-md" src="https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg" />
								<div className="playlist-detail-info">
									<h4>Cool Kids</h4>
									<p>Echosmith</p>
								</div> 
							</td>

							<td className="col-md-2">
								<p>Talking Dreams</p>              
							</td>

							<td className="col-md-1">
								<p>3:26</p>              
							</td>

							<td className="col-md-1">
								<p>1,266</p>              
							</td>

							<td className="col-md-2">
								<span onClick={this.handleLike} className={ this.state.red ? "icon-heart red fa-2x" : "icon-heart-empty fa-2x"}></span>            
							</td>

							<td className="col-md-3">
								<a><span className="icon-heart fa-2x"></span></a>
								<a><span className="icon-plus-circle fa-2x"></span></a>
							</td>
						</tr>
						<tr>
							<td className="col-md-3">
								<img className="mobile-img-thumbnail mar-r-md" src="https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg" />
								<div className="playlist-detail-info">
									<h4>Cool Kids</h4>
									<p>Echosmith</p>
								</div> 
							</td>

							<td className="col-md-2">
								<p>Talking Dreams</p>              
							</td>

							<td className="col-md-1">
								<p>3:26</p>              
							</td>

							<td className="col-md-1">
								<p>1,266</p>              
							</td>

							<td className="col-md-2">
								<span onClick={this.handleLike} className={ this.state.red ? "icon-heart red fa-2x" : "icon-heart-empty fa-2x"}></span>            
							</td>

							<td className="col-md-3">
								<a><span className="icon-heart fa-2x"></span></a>
								<a><span className="icon-plus-circle fa-2x"></span></a>
							</td>
						</tr>
					</tbody>
				</table>

				<a onClick={this.showHidePlayer}>play test</a>
				<br />
				<a onClick={this.showHideNotice}>notice test</a>
				{ this.state.displayPlayer ? <Player /> : null }
				{ this.state.displayNotice ? <ArtistDownloadNotice showHideNotice={self.showHideNotice} /> : null }
				<br />
				<a onClick={this.showHideEdit}>show edit</a>
				{ this.state.displayEdit ? <ArtistEditTrack showHideEdit={self.showHideEdit} /> : null }
				<br />
				<a onClick={this.showHideAdminDashboard}>show admin dashboard</a>
				{ this.state.displayAdminDashboard ? <AdminDashboard showHideAdminDashboard={self.showHideAdminDashboard} /> : null }
				<br />
				<a onClick={this.showHideUploadSuccess}>show upload success</a>
				{ this.state.displayUploadSuccess ? <ArtistUploadSuccess showHideUploadSuccess={self.showHideUploadSuccess} /> : null }
				<br />
				<a onClick={this.showHidePaymentOptions}>show payment options</a>
				{ this.state.displayPaymentOptions ? <PaymentOptions showHidePaymentOptions={self.showHidePaymentOptions} /> : null }
				<br />
				<a onClick={this.showHidePaymentProcessingPage}>show payment processing</a>
				{ this.state.displayPaymentProcessingPage ? <PaymentProcessingPage showHidePaymentProcessingPage={self.showHidePaymentProcessingPage} /> : null }
				<br />
				<a onClick={this.showHideArtistTaggedSuccess}>show tagged success</a>
				{ this.state.displayArtistTaggedSuccess ? <ArtistTaggedSuccess showHideArtistTaggedSuccess={self.showHideArtistTaggedSuccess} /> : null }
				<br />
				<a onClick={this.showHideWelcomeModal}>show welcome</a>
				{ this.state.displayWelcomeModal ? <WelcomeModal showHideWelcomeModal={self.showHideWelcomeModal} /> : null }
			</div>
		)
	}
});