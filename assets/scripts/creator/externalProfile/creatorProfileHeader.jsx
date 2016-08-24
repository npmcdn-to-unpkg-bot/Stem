var CreatorProfileHeader = React.createClass({
  render: function() {
    var creator = this.props.creator,
      bannerImageStyle = {
            backgroundImage: 'url("https://i.ytimg.com/vi/AqpzxxxrkAY/maxresdefault.jpg")'
        };
    return (
    <div className="header-wrapper">
      <div className="header-banner" style={bannerImageStyle}>
      </div>
      <div className="header-content-wrapper pad-l-lg">
        <img className="header-img" src="https://s-media-cache-ak0.pinimg.com/736x/c7/a8/30/c7a830fd7b671610e3493eba07353083.jpg" />
        <div className="header-content-detail pad-l-lg">
          <h1>Laura Sanchez</h1>
          <h4 className="pad-t-sm pad-b-md">All the great things that could possibly be found in a person all live in Laura.</h4>
          <button className="btn-primary" onClick="">
            <h4 className="pad-l-md pad-r-md">
              <span className="icon-user-add"></span>
              Follow
            </h4>
          </button>
        </div>
      </div>
      <div className="header-social-media mar-t-sm pad-r-lg pull-right">
        <ul>
          <li><span className="icon-soundcloud fa-2x"></span></li>
          <li><span className="icon-youtube-1 fa-2x"></span></li>
          <li><span className="icon-instagram-3 fa-2x"></span></li>
          <li><span className="icon-spotify-circled fa-2x"></span></li>
          <li><span className="icon-twitter fa-2x"></span></li>
          <li><span className="icon-facebook fa-2x"></span></li>
        </ul>
      </div>
    </div>
    )
  }
});