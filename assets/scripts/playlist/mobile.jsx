var PlaylistMobileView = React.createClass({
  render: function() {
    var self = this;

    return (
      <div className="playlist-mobile-view-wrapper col-xs-12">
        <ul className="col-xs-12">
          <li className="col-xs-12">
            <div className="col-xs-7">
              <h4>Cool Kids</h4>
              <p>Echosmith <span className="glyphicon glyphicon-minus"></span> Taking Dreams</p>
              <div className="playlist-mobile-view-rating col-xs-12">
                <span className="glyphicon glyphicon-star star"></span>             
                <span className="glyphicon glyphicon-star star"></span>             
                <span className="glyphicon glyphicon-star star"></span>             
                <span className="glyphicon glyphicon-star star"></span>  
              </div>
            </div>  
            <div className="pull-right">
              <a><span className="glyphicon glyphicon-heart playlist-glyph fa-2x"></span></a>
              <a><span className="glyphicon glyphicon-plus-sign playlist-glyph fa-2x"></span></a>  
            </div>  
          </li>
          <li className="col-xs-12">
            <div className="col-xs-7">
              <h4>Cool Kids</h4>
              <p>Echosmith <span className="glyphicon glyphicon-minus"></span> Taking Dreams</p>
              <div className="playlist-mobile-view-rating col-xs-12">
                <span className="glyphicon glyphicon-star playlist-glyph star"></span>             
                <span className="glyphicon glyphicon-star playlist-glyph star"></span>             
                <span className="glyphicon glyphicon-star playlist-glyph star"></span>             
                <span className="glyphicon glyphicon-star playlist-glyph star"></span>  
              </div>
            </div>
            <div className="pull-right">
              <a><span className="glyphicon glyphicon-heart playlist-glyph fa-2x"></span></a>
              <a><span className="glyphicon glyphicon-plus-sign playlist-glyph fa-2x"></span></a>  
            </div>  
          </li> 

        </ul>
      </div>
    )
  }
});