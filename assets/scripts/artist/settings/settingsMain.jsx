var ArtistSettings = React.createClass({
	render: function() {
	    return (
	        <div className="artist-account-navbar-wrapper">
	        	<ArtistAccountNavBar />
                <div className="content-with-sidebar bg-white"> 
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