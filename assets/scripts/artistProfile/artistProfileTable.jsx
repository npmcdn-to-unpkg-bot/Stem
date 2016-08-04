var ArtistProfileTable = React.createClass({
  getInitialState: function () {
    return {
      red: false
    }
  },
  handleLike: function (event) {
    if (event.currentTarget.className == "icon-heart-empty fa-2x" ) {
      event.currentTarget.className = "icon-heart red fa-2x";
    }
  },
  render: function() {
    return(
      <div className="artist-table-wrapper bg-white col-xs-12">
        <table>
          <thead>
            <tr>
              <th className="col-xs-1"> </th>
              <th className="col-xs-1"><h4>Song</h4></th>
              <th className="col-xs-1"><h4>Album</h4></th>
              <th className="col-xs-1"><h4>Time</h4></th>
              <th className="col-xs-1"><h4>Spins</h4></th>
              <th className="col-xs-1"><h4>Love</h4></th>
              <th className="col-xs-1"><h4>Download</h4></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="img-td col-xs-1 row no-gutters">
                <img className="mobile-img-thumbnail mar-r-xs" src="https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg" />
              </td>
              <td className="col-xs-1 col-md-2"><p>At Anyones Cost</p></td>
              <td className="col-xs-1 col-md-2"><p>Album Title Yay!</p></td>
              <td className="col-xs-1"><p>3:26</p></td>
              <td className="col-xs-1"><p>266</p></td>
              <td className="col-xs-1"><p><span onClick={this.handleLike} className={ this.state.red ? "icon-heart red fa-2x" : "icon-heart-empty fa-2x"}></span></p></td>
              <td className="col-xs-1"><p><span className="icon-down-circled fa-2x"></span></p></td>
            </tr>
            <tr>
              <td className="img-td col-xs-1 row no-gutters">
                <img className="mobile-img-thumbnail mar-r-xs" src="https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg" />
              </td>
              <td className="col-xs-1 col-md-2"><p>At Anyones Cost</p></td>
              <td className="col-xs-1 col-md-2"><p>Album Title Yay!</p></td>
              <td className="col-xs-1"><p>3:26</p></td>
              <td className="col-xs-1"><p>266</p></td>
              <td className="col-xs-1"><p><span onClick={this.handleLike} className={ this.state.red ? "icon-heart red fa-2x" : "icon-heart-empty fa-2x"}></span></p></td>
              <td className="col-xs-1"><p><span className="icon-down-circled fa-2x"></span></p></td>
            </tr>
            <tr>
              <td className="img-td col-xs-1 row no-gutters">
                <img className="mobile-img-thumbnail mar-r-xs" src="https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg" />
              </td>
              <td className="col-xs-1 col-md-2"><p>At Anyones Cost</p></td>
              <td className="col-xs-1 col-md-2"><p>Album Title Yay!</p></td>
              <td className="col-xs-1"><p>3:26</p></td>
              <td className="col-xs-1"><p>266</p></td>
              <td className="col-xs-1"><p><span onClick={this.handleLike} className={ this.state.red ? "icon-heart red fa-2x" : "icon-heart-empty fa-2x"}></span></p></td>
              <td className="col-xs-1"><p><span className="icon-down-circled fa-2x"></span></p></td>
            </tr>
            <tr>
              <td className="img-td col-xs-1 row no-gutters">
                <img className="mobile-img-thumbnail mar-r-xs" src="https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg" />
              </td>
              <td className="col-xs-1 col-md-2"><p>At Anyones Cost</p></td>
              <td className="col-xs-1 col-md-2"><p>Album Title Yay!</p></td>
              <td className="col-xs-1"><p>3:26</p></td>
              <td className="col-xs-1"><p>266</p></td>
              <td className="col-xs-1"><p><span onClick={this.handleLike} className={ this.state.red ? "icon-heart red fa-2x" : "icon-heart-empty fa-2x"}></span></p></td>
              <td className="col-xs-1"><p><span className="icon-down-circled fa-2x"></span></p></td>
            </tr>
            <tr>
              <td className="img-td col-xs-1 row no-gutters">
                <img className="mobile-img-thumbnail mar-r-xs" src="https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg" />
              </td>
              <td className="col-xs-1 col-md-2"><p>At Anyones Cost</p></td>
              <td className="col-xs-1 col-md-2"><p>Album Title Yay!</p></td>
              <td className="col-xs-1"><p>3:26</p></td>
              <td className="col-xs-1"><p>266</p></td>
              <td className="col-xs-1"><p><span onClick={this.handleLike} className={ this.state.red ? "icon-heart red fa-2x" : "icon-heart-empty fa-2x"}></span></p></td>
              <td className="col-xs-1"><p><span className="icon-down-circled fa-2x"></span></p></td>
            </tr>
            <tr>
              <td className="img-td col-xs-1 row no-gutters">
                <img className="mobile-img-thumbnail mar-r-xs" src="https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg" />
              </td>
              <td className="col-xs-1 col-md-2"><p>At Anyones Cost</p></td>
              <td className="col-xs-1 col-md-2"><p>Album Title Yay!</p></td>
              <td className="col-xs-1"><p>3:26</p></td>
              <td className="col-xs-1"><p>266</p></td>
              <td className="col-xs-1"><p><span onClick={this.handleLike} className={ this.state.red ? "icon-heart red fa-2x" : "icon-heart-empty fa-2x"}></span></p></td>
              <td className="col-xs-1"><p><span className="icon-down-circled fa-2x"></span></p></td>
            </tr>
            <tr>
              <td className="img-td col-xs-1 row no-gutters">
                <img className="mobile-img-thumbnail mar-r-xs" src="https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg" />
              </td>
              <td className="col-xs-1 col-md-2"><p>At Anyones Cost</p></td>
              <td className="col-xs-1 col-md-2"><p>Album Title Yay!</p></td>
              <td className="col-xs-1"><p>3:26</p></td>
              <td className="col-xs-1"><p>266</p></td>
              <td className="col-xs-1"><p><span onClick={this.handleLike} className={ this.state.red ? "icon-heart red fa-2x" : "icon-heart-empty fa-2x"}></span></p></td>
              <td className="col-xs-1"><p><span className="icon-down-circled fa-2x"></span></p></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
});