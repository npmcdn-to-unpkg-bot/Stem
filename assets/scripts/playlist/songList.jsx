var PlaylistTable = React.createClass({
  render: function() {
    var self = this;

    return(
      <div className="playlist-table-wrapper pad-box-md">
          <table className="col-xs-12 col-md-12 col-lg-12">
            <thead>
              <th className="col-md-3 pad-b-md"><h4>Track/Artist</h4></th>
              <th className="col-md-2 pad-b-md"><h4>Album</h4></th>
              <th className="col-md-1 pad-b-md"><h4>Time</h4></th>
              <th className="col-md-2 pad-b-md"><h4>Downloads</h4></th>
              <th className="col-md-2 pad-b-md"><h4>Popular</h4></th>
              <th className="col-md-2 pad-b-md"><h4>Options</h4></th>
            </thead>
            <tbody>
              <tr>
                <td className="col-md-3">
                  <img className="mobile-img-thumbnail mar-r-md" src="https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg" />
                  <div className="playlist-detail-info">
                    <h4>Cool Kids</h4>
                    <p>Echosmith</p>
                    <p>Taking Dreams</p>
                  </div> 
                </td>

                <td className="col-md-2">
                  <p>Talking Dreams</p>              
                </td>

                <td className="col-md-1">
                  <p>3:26</p>              
                </td>

                <td className="col-md-1">
                  <p>1,266</p>              
                </td>

                <td className="col-md-2">
                  <span className=" icon-star-3 playlist-glyph star"></span>             
                  <span className=" icon-star-3 playlist-glyph star"></span>             
                  <span className=" icon-star-3 playlist-glyph star"></span>             
                  <span className=" icon-star-3 playlist-glyph star"></span>             
                </td>

                <td className="col-md-3">
                  <a><span className="icon-heart fa-2x"></span></a>
                  <a><span className="icon-plus-circle fa-2x"></span></a>
                </td>
              </tr>
              <tr>
                <td className="col-md-3">
                  <img className="mobile-img-thumbnail mar-r-md" src="https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg" />
                  <div className="playlist-detail-info">
                    <h4>Cool Kids</h4>
                    <p>Echosmith</p>
                    <p>Taking Dreams</p>
                  </div> 
                </td>

                <td className="col-md-2">
                  <p>Talking Dreams</p>              
                </td>

                <td className="col-md-1">
                  <p>3:26</p>              
                </td>

                <td className="col-md-1">
                  <p>1,266</p>              
                </td>

                <td className="col-md-2">
                  <span className=" icon-star-3 playlist-glyph star"></span>             
                  <span className=" icon-star-3 playlist-glyph star"></span>             
                  <span className=" icon-star-3 playlist-glyph star"></span>             
                  <span className=" icon-star-3 playlist-glyph star"></span>             
                </td>

                <td className="col-md-3">
                  <a><span className="icon-heart fa-2x"></span></a>
                  <a><span className="icon-plus-circle fa-2x"></span></a>
                </td>
              </tr>
              

              
            </tbody>
          </table>
      </div>
    )
  }

});