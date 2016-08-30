var IpsySignUp = React.createClass({
	render: function() {
		return(
			<div className="ipsy-sign-up-wrappper">
				<section className="ipsy-sign-up-content">
					<header>
						<h4 className="ipsy-login display-inlb mar-l-lg pad-l-lg mar-r-lg pad-r-lg">LOGIN</h4>
						<button type="button" className="ipsy-create-account-btn">
							<span className="icon-plus-circled fa-2x"></span>
							<h4 className="display-inlb"> CREATE ACCOUNT</h4>
						</button>
					</header>
					<div className="ipsy-sign-up-main-content ipsy-main-content">
						<h3 className="ipsy-welcome pad-t-md mar-b-lg">Welcome!</h3>
						<img className="mar-t-sm mar-b-lg" src="/assets/images/ipsyos-logo-web3.png"/>
						<h4 className="mar-t-sm mar-b-md">Welcome to Thematic!</h4>
						<h4 className="mar-b-lg">As an ipsyOS creator, you'll be the very first to access this awesome new tool!</h4>
						<button className="ipsy-connect-google-btn mar-t-md mar-b-lg white"><h3>Connect with Google</h3></button>
					</div>
				</section>
			</div>
		)
	}
})