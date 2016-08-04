var ArtistSettings = React.createClass({
	render: function() {
		return (
			<div className="row no-gutters ">
				<div className="artist-account-navbar-wrapper bg-grey-4 col-sm-2">
					<ArtistAccountNavBar />
				</div>
				<div className="artist-account-wrapper bg-white col-xs-12 col-sm-9">
					<ArtistAccountSettings />
					<ArtistContactInfo />
					<ArtistConnectedAccounts />
					<ArtistNotification />
					<ArtistPassword />
				</div>
			</div> 
		)
	}
});