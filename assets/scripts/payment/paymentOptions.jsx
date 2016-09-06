var PaymentOptions = React.createClass({
	getInitialState: function() {
		return {
			shrink: false,
			displayOptions: true,
			displayGigPack: false,
			displayBigShot: false,
			displayPayLater: false
		}
	},
	onHover: function() {
		this.setState({shrink: true})
	},
	offHover: function() {
		this.setState({shrink: false})
	},
	showGigPack: function() {
		this.setState({displayGigPack: true});
		this.setState({displayOptions: false})
	},
	showBigShot: function() {
		this.setState({displayBigShot: true});
		this.setState({displayOptions: false})
	},
	showPayLater: function() {
		this.setState({displayPayLater: true});
		this.setState({displayOptions: false})
	},

	render: function() {
		return(
			<div className="payment-options-page row">
				<div className={this.state.displayOptions ? "payment-options-mobile-section" : "payment-options-content-hidden"}>
					<div className="payment-options-mobile">
						<div className="payment-mobile-left display-inlb">
							<h3 className="primary">Gig Pack</h3>
							<h2 className="payment-options-price">$25</h2>
						</div>
						<div className="payment-mobile-right display-inlb pad-l-md">
							<ul className="mar-l-lg mar-b-md">
								<li>- one thing</li>
								<li>- one thing</li>
								<li>- another thing</li>
								<li>- and another</li>
							</ul>
							<a onClick={this.showGigPack}><h4 className="payment-mobile-btn primary">Sign up</h4></a>
						</div>
					</div>
					<div className="payment-options-mobile big-shot">
						<div className="payment-mobile-left display-inlb">
							<h3 className="primary">Big Shot</h3>
							<h2 className="payment-options-price">$30</h2>
						</div>
						<div className="payment-mobile-right display-inlb pad-l-md">
							<ul className="mar-l-lg mar-b-md">
								<li>- one thing</li>
								<li>- one thing</li>
								<li>- another thing</li>
								<li>- and another</li>
							</ul>
							<a onClick={this.showBigShot}><h4 className="payment-mobile-btn primary">Get it</h4></a>
						</div>
					</div>
					<div className="payment-options-mobile pay-later">
						<div className="payment-mobile-left display-inlb">
							<h3 className="primary">Pay Later</h3>
							<h2 className="payment-options-price">Free</h2>
						</div>
						<div className="payment-mobile-right display-inlb pad-l-md">
							<ul className="mar-l-lg mar-b-md">
								<li>- one thing</li>
								<li>- one thing</li>
								<li>- another thing</li>
								<li>- and another</li>
							</ul>
							<a onClick={this.showPayLater}><h4 className="payment-mobile-btn primary">I'll Pay Later</h4></a>
						</div>
					</div>
				</div>

				<div className={this.state.displayOptions ? "payment-options-content" : "payment-options-content-hidden"}>
					<div className="payment-options display-inlb pair pay-later" onMouseEnter={this.onHover} onMouseLeave={this.offHover}>
						<h3 className="primary mar-t-md">Pay Later</h3>
						<h2 className="payment-options-price">Free</h2>
						<ul>
							<li>- one thing</li>
							<li>- one thing</li>
							<li>- another thing</li>
							<li>- and another</li>
						</ul>
						<a onClick={this.showPayLater}><h4 className="payment-options-btn primary mar-t-lg mar-b-sm">I'll pay later</h4></a>
					</div>
					<div className={this.state.shrink ? "payment-options display-inlb" : "payment-options display-inlb gig-pack"}>
						<h3 className="primary mar-t-md">Gig Pack</h3>
						<h2 className="payment-options-price">$25</h2>
						<ul>
							<li>- one thing</li>
							<li>- one thing</li>
							<li>- another thing</li>
							<li>- and another</li>
						</ul>
						<a onClick={this.showGigPack}><h4 className="payment-options-btn primary mar-t-lg mar-b-sm">Sign up</h4></a>
					</div>
					<div className="payment-options display-inlb pair big-shot" onMouseEnter={this.onHover} onMouseLeave={this.offHover}>
						<h3 className="primary mar-t-md">Big Shot</h3>
						<h2 className="payment-options-price">$30</h2>
						<ul>
							<li>- one thing</li>
							<li>- one thing</li>
							<li>- another thing</li>
							<li>- and another</li>
						</ul>
						<a onClick={this.showBigShot}><h4 className="payment-options-btn primary mar-t-lg mar-b-sm">Get It</h4></a>
					</div>
				</div>
				{this.state.displayGigPack ? <GigPackPaymentOption /> : null}
				{this.state.displayBigShot ? <BigShotPaymentOption /> : null}
				{this.state.displayPayLater ? <PayLaterPaymentOption /> : null}
			</div>
		)
	}
})