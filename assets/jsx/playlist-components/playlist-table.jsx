var PlaylistTable = React.createClass({
  render: function() {
    var self = this;

    return(
      <div className="playlist-table-wrapper col-xs-12 col-md-12 col-lg-12">
          <table className="playlist-table-header col-xs-12 col-md-12 col-lg-12">
            <thead>
              <th className="playlist-table-header-items col-xs-12 col-sm-2 col-md-2 col-lg-2"><h4>Track/Artist</h4></th>
              <th className="playlist-table-header-items col-xs-12 col-sm-2 col-md-2 col-lg-2"><h4>Album</h4></th>
              <th className="playlist-table-header-items col-xs-12 col-sm-2 col-md-2 col-lg-2"><h4>Time</h4></th>
              <th className="playlist-table-header-items col-xs-12 col-sm-2 col-md-2 col-lg-2"><h4>Downloads</h4></th>
              <th className="playlist-table-header-items col-xs-12 col-sm-2 col-md-2 col-lg-2"><h4>Popular</h4></th>
              <th className="playlist-table-header-items col-xs-12 col-sm-2 col-md-2 col-lg-2"><h4>Options</h4></th>
            </thead>
            <tbody>
              <tr>
                <td className="col-sm-3 col-md-3 col-lg-3">
                  <img className="playlist-album-img col-md-3 col-lg-3" src="https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg" />
                  <div className="playlist-album-detail col-xs-12 col-sm-12 col-md-12 col-lg-6">
                    <h4>Cool Kids</h4>
                    <p>Echosmith</p>
                  </div>  
                </td>

                <td className="col-lg-2">
                  <h4>Talking Dreams</h4>              
                </td>

                <td className="col-lg-2">
                  <h4>3:26</h4>              
                </td>

                <td className="col-lg-2">
                  <h4>1,266</h4>              
                </td>

                <td className="col-lg-2">
                  <span className="glyphicon glyphicon-star playlist-glyph star"></span>             
                  <span className="glyphicon glyphicon-star playlist-glyph star"></span>             
                  <span className="glyphicon glyphicon-star playlist-glyph star"></span>             
                  <span className="glyphicon glyphicon-star playlist-glyph star"></span>             
                </td>

                <td className="col-lg-2">
                  <a><span className="glyphicon glyphicon-heart playlist-glyph fa-lg"></span></a>
                  <a><span className="glyphicon glyphicon-plus-sign playlist-glyph fa-lg"></span></a>
                </td>
              </tr>

              <tr>
                <td className="col-sm-3 col-md-3 col-lg-3">
                  <img className="playlist-album-img col-md-3 col-lg-3" src="https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg" />
                  <div className="playlist-album-detail col-xs-12 col-sm-12 col-md-12 col-lg-6">
                    <h4>Cool Kids</h4>
                    <p>Echosmith</p>
                  </div>  
                </td>

                <td className="col-lg-2">
                  <h4>Talking Dreams</h4>              
                </td>

                <td className="col-lg-2">
                  <h4>3:26</h4>              
                </td>

                <td className="col-lg-2">
                  <h4>1,266</h4>              
                </td>

                <td className="col-lg-2">
                  <span className="glyphicon glyphicon-star playlist-glyph star"></span>             
                  <span className="glyphicon glyphicon-star playlist-glyph star"></span>             
                  <span className="glyphicon glyphicon-star playlist-glyph star"></span>             
                  <span className="glyphicon glyphicon-star playlist-glyph star"></span>             
                </td>

                <td className="col-lg-2">
                  <a><span className="glyphicon glyphicon-heart playlist-glyph fa-lg"></span></a>
                  <a><span className="glyphicon glyphicon-plus-sign playlist-glyph fa-lg"></span></a>
                </td>
              </tr>  

              <tr>
                <td className="col-sm-3 col-md-3 col-lg-3">
                  <img className="playlist-album-img col-md-3 col-lg-3" src="https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg" />
                  <div className="playlist-album-detail col-xs-12 col-sm-12 col-md-12 col-lg-6">
                    <h4>Cool Kids</h4>
                    <p>Echosmith</p>
                  </div>  
                </td>

                <td className="col-lg-2">
                  <h4>Talking Dreams</h4>              
                </td>

                <td className="col-lg-2">
                  <h4>3:26</h4>              
                </td>

                <td className="col-lg-2">
                  <h4>1,266</h4>              
                </td>

                <td className="col-lg-2">
                  <span className="glyphicon glyphicon-star playlist-glyph star"></span>             
                  <span className="glyphicon glyphicon-star playlist-glyph star"></span>             
                  <span className="glyphicon glyphicon-star playlist-glyph star"></span>             
                  <span className="glyphicon glyphicon-star playlist-glyph star"></span>             
                </td>

                <td className="col-lg-2">
                  <a><span className="glyphicon glyphicon-heart playlist-glyph fa-lg"></span></a>
                  <a><span className="glyphicon glyphicon-plus-sign playlist-glyph fa-lg"></span></a>
                </td>
              </tr>

              <tr>
                <td className="col-sm-3 col-md-3 col-lg-3">
                  <img className="playlist-album-img col-md-3 col-lg-3" src="https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg" />
                  <div className="playlist-album-detail col-xs-12 col-sm-12 col-md-12 col-lg-6">
                    <h4>Cool Kids</h4>
                    <p>Echosmith</p>
                  </div>  
                </td>

                <td className="col-lg-2">
                  <h4>Talking Dreams</h4>              
                </td>

                <td className="col-lg-2">
                  <h4>3:26</h4>              
                </td>

                <td className="col-lg-2">
                  <h4>1,266</h4>              
                </td>

                <td className="col-lg-2">
                  <span className="glyphicon glyphicon-star playlist-glyph star"></span>             
                  <span className="glyphicon glyphicon-star playlist-glyph star"></span>             
                  <span className="glyphicon glyphicon-star playlist-glyph star"></span>             
                  <span className="glyphicon glyphicon-star playlist-glyph star"></span>             
                </td>

                <td className="col-lg-2">
                  <a><span className="glyphicon glyphicon-heart playlist-glyph fa-lg"></span></a>
                  <a><span className="glyphicon glyphicon-plus-sign playlist-glyph fa-lg"></span></a>
                </td>
              </tr>
              
            </tbody>
          </table>
      </div>
    )
  }

});