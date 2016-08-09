var ArtistDownloadNotice = React.createClass({
	handleClick: function() {
        this.props.showHideNotice();
	},

	render: function() {
		return(
			<div className="download-notice-modal modal-background">
				<div className="download-notice-box">
					<div className="download-notice-heading bg-grad-1 pad-box-lg">
						<span className="icon-ok-circled white display-inlb fa-3x mar-r-sm"></span>
						<h2 className="heads-up-title white display-inlb">Heads Up!</h2>
						<h4 className="white mar-t-md">You song "Satori" will download once you accept</h4>
					</div>
					<div className="download-notice-bottom bg-white pad-box-lg">
						<p className="mar-b-md mar-l-md">By downloading music from Thematic, you agree to:</p>
						<ul>
							<li className="mar-box-md">- Use the promotionallink and language in your video description</li>
							<li className="mar-box-md">- Let us know that you used the song in your video by visiting your downloads page</li>
						</ul>
						<div className="download-notice-links">
							<h3 onClick={this.handleClick} className="dont-download display-inlb mar-t-lg">DON'T DOWNLOAD</h3>
							<h3 onClick={this.handleClick} className="display-inlb primary mar-t-lg mar-l-lg">ACCEPT</h3>
						</div>
					</div>
				</div>
			</div>
		)
	}
});