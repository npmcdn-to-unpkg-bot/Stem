var ArtistPassword = React.createClass({
  render: function() {
    return(
      <div className="artist-password-wrapper col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="artist-password-header col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3>Password</h3>
          <h5>Update your password</h5>
        </div>
        <div className="artist-password-content col-xs-12 col-sm-8 col-md-5 col-lg-5">
          <input className=" col-xs-12 col-lg-12" placeholder="Current Password" />
          <input className=" col-xs-12 col-lg-12" placeholder="New Password" />
          <input className=" col-xs-12 col-lg-12" placeholder="New Password Again" />
          <button className="artist-password-btn col-xs-12  col-lg-12">Change Password</button>
        </div>
      </div>
    )
  }
});