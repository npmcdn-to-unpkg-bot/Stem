var ArtistAccountView = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          <div className="col-lg-3">
            <h3>Account</h3>
            <h5>Update your account settings</h5>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="artist-account-setting-profile-img col-lg-1"></div>  
          <div className="artist-account-setting-profile-banner-img col-lg-8 col-lg-offset-1"></div>
        </div> 
        <div>
          <div className="col-lg-12">
            <h5 className="col-lg-2">Custom Link</h5>
            <input className="col-lg-3"/>
            <h5 className="col-lg-2">Email</h5>
            <input className="col-lg-3"/>
          </div>
            <input className="account-setting-bio-box col-lg-12" placeholder="Biography" />
          <div>
          </div>
          <div className="col-lg-12">
            <button>Submit</button>
          </div>
        </div>
      </div>   
    )
  }
});