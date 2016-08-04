var Header = React.createClass({
  render: function() {
    return (
      <div className="header-wrapper">
        <div className="header-banner"></div>
        <div className="header-content-wrapper pad-l-lg">
          <img className="header-img" src="https://a4-images.myspacecdn.com/images03/33/588cae99266a4ae2a9c49c909b02781c/300x300.jpg" />
          <div className="header-content-detail pad-l-lg">
            <h1>InMemory</h1>
            <h4 className="pad-t-sm pad-b-md">InMemory is pretty much the greatest band that you haven't heard of. Game of Thrones has Jon Snow. The Walking Dead has Daryl. Pokemon have Pikachu. Your ears have InMemory.</h4>
            <button className="btn-primary"><h4 className="pad-l-md pad-r-md"><span className="icon-user-add"></span>Follow</h4></button>
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