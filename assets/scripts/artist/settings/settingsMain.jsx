var ArtistAccountSettings = React.createClass({
  render: function() {
    return (
      <div className="row no-gutters ">
        <div className="col-sm-2 col-md-2 col-lg-2 ">
            <ArtistAccountNavBar />
        </div>
        <div className="artist-account-wrapper col-xs-12 col-sm-10 col-md-10 col-lg-10">
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