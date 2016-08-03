var ArtistAccountSettings = React.createClass({
  render: function() {
    console.log('userInfo = ' + this.props.userInfo);

    return (
      <div className="row no-gutters ">
        <div className="artist-account-navbar-wrapper col-sm-2">
          <ArtistAccountNavBar />
        </div>
        <div className="artist-account-wrapper col-xs-12 col-sm-9">
          <ArtistAccountView />
        </div>  
        <div className="col-sm-2">
            <ArtistAccountNavBar />
        </div>
        <div className="artist-account-wrapper col-xs-12 col-sm-10">
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