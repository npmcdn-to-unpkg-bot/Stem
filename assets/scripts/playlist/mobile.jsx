var PlaylistMobileView = React.createClass({
  render: function() {
    var self = this;

    return (
      <div className="playlist-mobile-view-wrapper">
        <ul className="pad-l-md">
          <li>
            <img className="mobile-img-thumbnail mar-r-md" src="https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg" />
            <div className="playlist-mobile-detail">
              <div className="playlist-mobile-info">
                <h4>Cool Kids</h4>
                <p>Echosmith</p>
                <p>Taking Dreams</p>
              </div>  
              <div className="playlist-mobile-view-rating star">
                <span className="icon-star-3"></span>             
                <span className="icon-star-3"></span>             
                <span className="icon-star-3"></span>             
                <span className="icon-star-3"></span>  
              </div>
            </div>  
            <div className="playlist-mobile-list-action pad-t-sm pull-right">
              <a><span className="icon-heart playlist-glyph fa-2x"></span></a>
              <a><span className="icon-plus-circle playlist-glyph fa-2x"></span></a>  
            </div>  
          </li>
          <li>
            <img className="mobile-img-thumbnail mar-r-md" src="https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg" />
            <div className="playlist-mobile-detail">
              <h4>Cool Kids</h4>
              <p>Echosmith</p>
              <p>Taking Dreams</p>
              <div className="playlist-mobile-view-rating star">
                <span className="icon-star-3"></span>             
                <span className="icon-star-3"></span>             
                <span className="icon-star-3"></span>             
                <span className="icon-star-3"></span>  
              </div>
            </div>  
            <div className="playlist-mobile-list-action pad-t-sm pull-right">
              <a><span className="icon-heart playlist-glyph fa-2x"></span></a>
              <a><span className="icon-plus-circle playlist-glyph fa-2x"></span></a>  
            </div>  
          </li>
        </ul>
      </div>
    )
  }
});