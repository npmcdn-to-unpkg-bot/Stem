var ArtistSettings = React.createClass({
  render: function() {
    return (
      <div className="row no-gutters ">
        <div className="artist-account-navbar-wrapper col-sm-2">
          <ArtistAccountNavBar />
        </div>
        <div className="artist-account-wrapper col-xs-12 col-sm-9">
<<<<<<< HEAD
          <ArtistAccountView />
<<<<<<< HEAD
        </div>
=======
        </div>  
>>>>>>> origin/dev
        <div className="col-sm-2">
            <ArtistAccountNavBar />
        </div>
        <div className="artist-account-wrapper col-xs-12 col-sm-10">
=======
>>>>>>> f871c6f18eee3288cfc9edc86bfbca71b584f643
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