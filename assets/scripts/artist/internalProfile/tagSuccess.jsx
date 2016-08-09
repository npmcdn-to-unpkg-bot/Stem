var ArtistTaggedSuccess = React.createClass({
	getInitialState: function() {
		return {
			uploadSuccessful: true
		};
	},

	close: function() {
		this.setState({uploadSuccessful: false});
	},

	render: function() {
		return(
			<div className={this.state.uploadSuccessful ? "artist-tag-success modal-background" : "artist-tag-success-hidden"}>
				<div className="tag-success-box">
					<div className="tag-success-box-head display-true">
						<h3 onClick={this.close} className="icon-cancel-circled2 white mar-t-sm mar-r-sm pull-right"></h3>
						<ArtistSuccessHeadingBox />
					</div>
					<div className="tag-success-body bg-white pad-box-lg">
						<p>Our team of Artist Commity will review your track(s) and reach out if we're picking up what you're putting down.</p>
						<br />
						<h4>Just FYI:</h4>
						<br />
						<p>Not all submitted music gets added to the platform. We make sure to personally review every submission just to make sure we can support you and find you awesome placements.</p>
						<br /> 
						<h4>If your music is approved:</h4>
						<br />
						<p>We'll need some more information from you. One of our Artist Committee will reach out to you directly.</p>
						<a onClick={this.close} className="primary mar-t-sm pull-right"><h4>CLOSE</h4></a>
						<br />
					</div>
				</div>
			</div>
		)
	}
});