var IpsySignUpOops = React.createClass({
	render: function() {
		return(
			<div className="ipsy-oops-content ipsy-main-content">
				<h2 className="fancy-font mar-t-lg mar-b-md">Oops!</h2>
				<p className="ipsy-paragraphs mar-r-md mar-b-md mar-l-md">We didn't seem to find your ipsyOS account in our system. If you're not an approved ipsyOS creator, you can <a>sign up for the waitlist here</a>.</p>
				<p className="ipsy-paragraphs mar-r-md mar-b-md mar-l-md">If we made a mistake and you ARE an ipsyOS creator, shoot us an email at: <br /><a>someemail@thematic.co</a><br />and we'll get this sorted out for you!</p>
				<h2 className="fancy-font ipsy-pink mar-t-lg mar-b-lg pad-b-sm">Join the waiting list!</h2>
			</div>
		)
	}
})