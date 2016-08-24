var CreatorProfileYouTube = React.createClass({
  getInitialState: function() {
    return {
      windowWidth: 1,
      cVideoWidth: 0,
      videoItemWidth: 300,
    };
  },

  componentDidMount: function() {
    this.slideShow();

    var l = $('.creator-youtube-wrapper ul li').length,
      w = $('.creator-youtube-wrapper ul li').width(),
      windowWidth = window.innerWidth,
      cVideoWidth = l * w,
      videoItemWidth = this.state.videoItemWidth;

    if(windowWidth > cVideoWidth) {
      videoItemWidth = windowWidth / l;
    };

    this.setState({
      windowWidth: windowWidth,
      cVideoWidth: cVideoWidth,
      style: {width: videoItemWidth}
    });
  },

  slideShow: function(){
    var self = this;
    setInterval(this.moveRight, 3000);
  },
  moveLeft: function() {
    var w = this.state.videoItemWidth;
    $('.creator-youtube-wrapper ul').animate({
      left: w
    }, "slow", function () {
      $('.creator-youtube-wrapper ul li:last-child').prependTo('.creator-youtube-wrapper ul');
      $('.creator-youtube-wrapper ul').css('left', '');
    });
  },

  moveRight: function() {
    var w = this.state.videoItemWidth;
    $('.creator-youtube-wrapper ul').animate({
      left: -w
    }, "slow", function () {
      $('.creator-youtube-wrapper ul li:first-child').appendTo('.creator-youtube-wrapper ul');
      $('.creator-youtube-wrapper ul').css('left', '');
    });
  },
  render: function () {
    return (
      <div className="creator-youtube-wrapper pad-t-lg pad-b-lg">
        <a onClick={this.moveLeft} className="video-nav-prev icon-left-open-big mar-t-sm"></a>
        <a onClick={this.moveRight} className="video-nav-next icon-right-open-big mar-t-sm mar-r-lg"></a>
        <ul className="creator-youtube-list row no-gutters">
          <li>
            <iframe className="creator-youtube-video" src="https://www.youtube.com/embed/E9w3yDrWilY" frameBorder="0" allowFullScreen></iframe>
            <a><h4>video title</h4></a>
            <p>Laura Sanchez</p>
            <p>237,409 views - 1 year ago</p>
          </li>
          <li>
            <iframe className="creator-youtube-video" src="https://www.youtube.com/embed/0tyGn8wYbzc" frameBorder="0" allowFullScreen></iframe>
            <a><h4>video title</h4></a>
            <p>Laura Sanchez</p>
            <p>237,409 views - 1 year ago</p>
          </li>
          <li>
            <iframe className="creator-youtube-video" src="https://www.youtube.com/embed/FH6pGv6LGNY" frameBorder="0" allowFullScreen></iframe>
            <a><h4>video title</h4></a>
            <p>Laura Sanchez</p>
            <p>237,409 views - 1 year ago</p>
          </li>
          <li>
            <iframe className="creator-youtube-video" src="https://www.youtube.com/embed/6yVT8mrEfLI" frameBorder="0" allowFullScreen></iframe>
            <a><h4>video title</h4></a>
            <p>Laura Sanchez</p>
            <p>237,409 views - 1 year ago</p>
          </li>
          <li>
            <iframe className="creator-youtube-video" src="https://www.youtube.com/embed/E9w3yDrWilY" frameBorder="0" allowFullScreen></iframe>
            <a><h4>video title</h4></a>
            <p>Laura Sanchez</p>
            <p>237,409 views - 1 year ago</p>
          </li>
          <li>
            <iframe className="creator-youtube-video" src="https://www.youtube.com/embed/CvtJR_GFrB4" frameBorder="0" allowFullScreen></iframe>
            <a><h4>video title</h4></a>
            <p>Laura Sanchez</p>
            <p>237,409 views - 1 year ago</p>
          </li>
        </ul>
      </div>
    )
  }
});