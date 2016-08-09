var ArtistSettings = React.createClass({
	render: function() {
	    return (
			<div className="row no-gutters ">
		        <div className="artist-account-navbar-wrapper">
		        	<ArtistAccountNavBar />
		        </div>
		        <div className="artist-account-wrapper content-with-sidebar-settings">
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