var CreatorProfileMain = React.createClass({
  getInitialState: function() {
    return {
      songs: [],
      artist: {}
    };     
  },
  componentDidMount: function() {
    var userInfo = this.context.userInfo;

    // This is test data, keeping this for now
    // TODO: Remove me later when we have more test data to work with
    // var userInfo = {
    //  profileName: 'InMemory',
    //  bio: 'The best band thats ever had the pleasure of playing instruments on a stage with live people, not dead',
    //  profileImageUrl: 'https://a4-images.myspacecdn.com/images03/33/588cae99266a4ae2a9c49c909b02781c/300x300.jpg',
    //  bannerImageUrl: 'https://a4-images.myspacecdn.com/images03/33/588cae99266a4ae2a9c49c909b02781c/300x300.jpg'
    // };

    this.setState({
      creator: {
        profileName: userInfo.profileName,
        bio: userInfo.bio,
        profileImageUrl: userInfo.profileImageUrl,
        bannerImageUrl: userInfo.bannerImageUrl
      }
    });
  },
  render: function () {
    return (
      <div>
        <CreatorProfileHeader creator={this.state.creator} />
        <div className="pad-box-lg bg-white">
          <h3>My Latest Videos</h3>
          <a>youtube.com/things</a>
          <CreatorProfileYouTube />
          <CreatorProfileTags />
          <div className="pad-box-md">
            <h3>My Activity</h3>
            <p>My latest plays and loves</p>
          </div>
          <PlaylistTable />
          <div className="text-center">
            <a><h3>Load More</h3></a>
          </div>  
        </div>  
      </div>
    )
  }
});

CreatorProfileMain.contextTypes = {
  userInfo: React.PropTypes.object
};