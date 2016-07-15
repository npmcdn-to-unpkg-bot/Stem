var ArtistAccountSettings = React.createClass({
  render: function() {
    return (
      <div className="row no-gutters col-lg-12">
        <div className="col-md-2 col-lg-2 ">
            <ArtistAccountNavBar />
        </div>
        <div className="artist-account-wrapper col-md-10 col-lg-10">
          <ArtistAccountView />
          <ArtistContactInfo />
          <ArtistConnectedAccounts />
          <ArtistNotification />
          <ArtistPassword />
        </div>
    </div> 
    )
  }
});