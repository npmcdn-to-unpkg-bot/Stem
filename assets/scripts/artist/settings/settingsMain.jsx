var ArtistSettings = React.createClass({
	render: function() {
	    return (
	        <span>
	        	<ArtistAccountNavBar />
				<ArtistAccountSettings />
				<ArtistContactInfo />
				<ArtistConnectedAccounts />
				<ArtistNotification />
				<ArtistPassword />
            </span>
	    )
  	}
});