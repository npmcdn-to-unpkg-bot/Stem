var WelcomeModal = React.createClass({
	handleClick: function() {
        this.props.showHideNotice();
	},

	render: function() {
		return(
			<div className="welcome-modal modal-background light-modal-bg">
				<div className="modal-box">
					<div className="modal-heading bg-grad-1 pad-box-md">
						<span onClick={this.handleClick} className="icon-cancel-circled2 white fa-2x pull-right"></span>
						<span className="icon-ok-circled white display-inlb fa-3x mar-r-sm"></span>
						<h2 className="modal-title white display-inlb">Welcome!</h2>
						<h4 className="welcome-sub-heading white mar-t-sm mar-r-lg mar-l-lg">You're the newest (and frankly, the coolest) new member of the Stem family!</h4>
					</div>
					<div className="modal-bottom bg-white pad-box-lg">
						<p className="mar-b-md mar-l-md mar-r-sm">Now you can browse music, download it, bookmark it, use it in your content, connect with the artists, and all that jazz.</p>
						<p className="mar-b-md mar-l-md mar-r-sm">We're in invite only Beta right now, so if you have any feedback, our ears are tuned! You can click the feedback button or email our product team at:</p>
						<p className="mar-b-md mar-l-md">someemail@email.com</p>
						<p className="mar-l-md">Happy hunting!!!!<br/>The Stem Crew</p>
						<h4 onClick={this.handleClick} className="primary mar-t-md mar-l-lg modal-links">Let me in!</h4>
					</div>
				</div>
			</div>
		)
	}
})