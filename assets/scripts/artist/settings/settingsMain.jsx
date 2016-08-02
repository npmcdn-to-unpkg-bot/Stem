var ArtistAccountSettings = React.createClass({
  render: function() {
    console.log('userInfo = ' + this.props.userInfo);

    return (
      <div className="row no-gutters ">
<<<<<<< HEAD
        <div className="artist-account-navbar-wrapper col-sm-2">
            <ArtistAccountNavBar />
        </div>
        <div className="artist-account-wrapper col-xs-12 col-sm-9">
          <ArtistAccountView />
=======
        <div className="col-sm-2">
            <ArtistAccountNavBar />
        </div>
        <div className="artist-account-wrapper col-xs-12 col-sm-10">
          <ArtistAccountSettings />
>>>>>>> 68435701d0f938975a8b3aeeb3de1bf29e0b3a2c
          <ArtistContactInfo />
          <ArtistConnectedAccounts />
          <ArtistNotification />
          <ArtistPassword />
        </div>
    </div> 
    )
  }
});