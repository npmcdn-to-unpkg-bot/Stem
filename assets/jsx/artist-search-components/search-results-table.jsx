var ArtistSearchResultsTable = React.createClass({
  render: function() {
    var self = this;
    return (
      <div className="artist-search-table-wrapper col-xs-8 col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 col-lg-10 col-lg-offset-2">
          <table className="artist-table-header col-xs-12 col-md-12 col-lg-12">
            <thead>
              <th className="artist-search-table-header-items col-xs-12 col-sm-2 col-md-2 col-lg-3"><h4>Track/Artist</h4></th>
              <th className="artist-search-table-header-items col-xs-12 col-sm-2 col-md-2 col-lg-1"><h4>Album</h4></th>
              <th className="artist-search-table-header-items col-xs-12 col-sm-2 col-md-2 col-lg-1"><h4>Time</h4></th>
              <th className="artist-search-table-header-items col-xs-12 col-sm-2 col-md-2 col-lg-1"><h4>Downloads</h4></th>
              <th className="artist-search-table-header-items col-xs-12 col-sm-2 col-md-2 col-lg-1"><h4>Popular</h4></th>
              <th className="artist-search-table-header-items col-xs-12 col-sm-2 col-md-2 col-lg-1"><h4>Options</h4></th>
            </thead>
            <tbody>
              <tr>
                <td className="col-sm-3 col-md-3 col-lg-3">
                  <img className="artist-search-album-img col-md-3 col-lg-3" src="https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg" />
                  <div className="artist-search-album-detail col-xs-12 col-sm-12 col-md-12 col-lg-5">
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
                  <img className="artist-search-album-img col-md-3 col-lg-3" src="https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg" />
                  <div className="artist-search-album-detail col-xs-12 col-sm-12 col-md-12 col-lg-5">
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
                  <img className="artist-search-album-img col-md-3 col-lg-3" src="https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg" />
                  <div className="artist-search-album-detail col-xs-12 col-sm-12 col-md-12 col-lg-5">
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
                  <img className="artist-search-album-img col-md-3 col-lg-3" src="https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg" />
                  <div className="artist-search-album-detail col-xs-12 col-sm-12 col-md-12 col-lg-5">
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