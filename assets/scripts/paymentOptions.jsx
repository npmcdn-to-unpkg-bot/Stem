var PaymentOptions = React.createClass({
	getInitialState: function() {
		return {
			shrink: false
		}
	},
	onHover: function() {
		this.setState({shrink: true})
	},
	offHover: function() {
		this.setState({shrink: false})
	},

	render: function() {
		return(
			<div className="payment-options-page row">
				<div className="payment-options-content">
					<div className="payment-options display-inlb pair pay-later" onMouseEnter={this.onHover} onMouseLeave={this.offHover}>
						<h3 className="primary mar-t-md">Pay Later</h3>
						<h2 className="payment-options-price">Free</h2>
						<ul>
							<li>- one thing</li>
							<li>- one thing</li>
							<li>- another thing</li>
							<li>- and another</li>
						</ul>
						<h4 className="payment-options-btn primary mar-t-lg mar-b-sm">I'll pay later</h4>
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
						<h4 className="payment-options-btn primary mar-t-lg mar-b-sm">Sign up</h4>
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
						<h4 className="payment-options-btn primary mar-t-lg mar-b-sm">Get It</h4>
					</div>
				</div>
			</div>
		)
	}
})