var CreatorProfileHeader = React.createClass({
  getInitialState: function() {
    return {
      creatorData: this.props.creator
    }
  },
  render: function() {
    var creator = this.props.creator,
      bannerImageStyle = {
            backgroundImage: 'url(' + this.props.creator.bannerImageUrl +')'
        };
    return (
    <div className="header-wrapper">
      <div className="header-banner" style={bannerImageStyle}>
      </div>
      <div className="header-content-wrapper pad-l-lg">
        <img className="header-img" src={this.props.creator.profileImageUrl} />
        <div className="header-content-detail pad-l-lg">
          <h1>{this.props.creator.name}</h1>
          <h4 className="pad-t-sm pad-b-md">{this.props.creator.bio}</h4>
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
          <li><a href={this.props.creator.facebookId} className="color white"><span className="icon-soundcloud fa-2x"></span></a></li>
          <li><a href={this.props.creator.youtubeId} className="color white"><span className="icon-youtube-1 fa-2x"></span></a></li>
          <li><a href={this.props.creator.facebookId} className="color white"><span className="icon-instagram-3 fa-2x"></span></a></li>
          <li><a href={this.props.creator.facebookId} className="color white"><span className="icon-spotify-circled fa-2x"></span></a></li>
          <li><a href={this.props.creator.twitterId} className="color white"><span className="icon-twitter fa-2x"></span></a></li>
          <li><a href={this.props.creator.facebookId} className="color white"><span className="icon-facebook fa-2x"></span></a></li>
        </ul>
      </div>
    </div>
    )
  }
});