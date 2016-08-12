var PaymentOptions = React.createClass({
	render: function() {
		return(
			<div className="payment-options-page row">
				<div className="payment-options-content">
					<div className="payment-options pay-later">
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
					<div className="payment-options gig-pack">
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
					<div className="payment-options big-shot">
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