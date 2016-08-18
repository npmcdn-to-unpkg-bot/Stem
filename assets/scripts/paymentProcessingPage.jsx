var PaymentProcessingPage = React.createClass({
	render: function() {
		return(
			<div className="payment-processing-page pad-box-lg row">
				<h3 className="mar-b-sm">You're so close to having all this music at your finger tips!</h3>
				<p>We're so stoked to have you join our family!</p>
				<div className="payment-processing-info pad-box-md col-sm-8">
					<div className="payment-personal-info row mar-b-lg">
						<h5 className="mar-b-md mar-l-md"><span className="circled-number mar-r-sm">1</span> PERSONAL INFORMATION</h5>
						<div className="col-sm-6">
							<label>First name</label>
							<input type="text" name="first-name" placeholder="Elon" className=""></input>
						</div>
						<div className="col-sm-6">
							<label>Last name</label>
							<input type="text" name="last-name" placeholder="Musk"></input>
						</div>
						<div className="col-sm-12">
							<label>Email</label>
							<input type="email" name="email" placeholder="elon@spacex.com"></input>
						</div>
						<div className="col-sm-6">
							<label>Country</label>
							<input type="text" name="country" placeholder="United States"></input>
						</div>
						<div className="col-sm-6">
							<label>Postal Code</label>
							<input type="text" name="postal-code" placeholder="10001"></input>
						</div>
						<div className="col-sm-12">
							<label>Phone Number</label>
							<input type="text" name="phone-number" placeholder="(212)692-9392"></input>
						</div>
					</div>

					<div className="payment-payment-details row">
						<h5 className="mar-b-md mar-l-md"><span className="circled-number mar-r-sm">2</span> PAYMENT DETAILS <span className="icon-lock mar-l-sm"></span></h5>
						<div className="col-xs-12">
							<label>Credit Card Number</label>
							<input type="number" name="cc-number" placeholder="0000 - 0000 - 0000 - 0000"></input>
							<img src="assets/images/visa.png" className="cc-image pull-right" />
						</div>
						<div className="col-xs-6">
							<label>Security code</label>
							<input type="password" name="security-code" placeholder="***"></input>
						</div>
						<div className="col-xs-6 mar-b-sm">
							<label>Expiration date</label>
							<input type="text" name="expiration-date" placeholder="MM/YY"></input>
						</div>
					</div>
					<button type="button" className="col-xs-12 btn bg-primary pad-t-sm pad-b-sm"><span className="icon-basket-1"></span> COMPLETE PURCHASE</button>
				</div>
				<div className="payment-order-summary col-sm-4 pad-t-md pad-r-md pad-b-sm pad-l-md mar-t-lg">
					<h5 className="mar-b-lg">YOUR ORDER</h5>
					<div className="dash-bottom">
						<p className="pad-b-sm">Jam Sesh (monthly*) <span className="pull-right">$ 25</span></p>
					</div>
					<div className="dash-bottom">
						<p className="pad-t-sm pad-b-sm">Total purchases <span className="pull-right">$ 25</span></p>
						<p className="">Estimated tax <span className="pull-right">$ 0</span></p>
					</div>
					<h4 className="mar-t-md mar-b-md">Total <span className="pull-right">$ 25</span></h4>
					<p className="payment-fine-print">*Your card will be billed $25 monthly. You can cancel anytime</p>
				</div>
			</div>
		)
	}
})