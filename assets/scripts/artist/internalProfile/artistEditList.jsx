var ArtistEditList = React.createClass({
  getInitialState: function() {
    return {
      activeAlbum: true,
    }
  },
  activeSelector: function() {
    this.setState({activeAlbum: false});
  },
  albumSelect: function() {
    this.setState({activeAlbum: true});
  },
  render: function() {
    return(
      <div className="edit-album-content col-xs-6">
          <div onClick={this.albumSelect} className={this.state.activeAlbum ? "edit-list-active pad-t-lg" : "edit-album-item pad-t-lg"}>
            <img className="edit-album-img mar-r-md mar-l-lg" src="https://i.ytimg.com/vi/ypX5RiWRPIQ/maxresdefault.jpg" />
            <div className="edit-album-detail pad-b-lg">
              <h2>Album Titles Yo!</h2>
              <h3>By: InMemory</h3>
              <p>Last Edit: 2/21/1985</p>
            </div>
          </div>  
          <div className="edit-list-wrapper">
            <ul>
              <li onClick={this.activeSelector} className={this.state.activeAlbum ? "" : "edit-list-active"}>
                <div className="edit-content-wrapper pad-l-lg">
                  <div className="edit-track-title pad-b-sm">
                    <h3>Satori</h3>
                    <h3 className="pull-right">2:33</h3>
                  </div>
                  <div className="edit-track-detail mar-r-md">
                    <p>File: satori_final.aif</p>
                    <p>File Size: 43.2mb</p>
                    <p>Status: approved</p>
                  </div>
                  <a className="mar-t-sm pull-right"><p>Replace</p></a>
                </div>
                <div className="cancel-function pull-right"> 
                  <span className="icon-cancel fa-2x pad-r-md"></span> 
                </div>
              </li>
              <li>
                <div className="edit-content-wrapper pad-l-lg">
                  <div className="edit-track-title pad-b-sm">
                    <h3>Satori</h3>
                    <h3 className="pull-right">2:33</h3>
                  </div>
                  <div className="edit-track-detail mar-r-md">
                    <p>File: satori_final.aif</p>
                    <p>File Size: 43.2mb</p>
                    <p>Status: approved</p>
                  </div>
                  <a className="mar-t-sm pull-right"><p>Replace</p></a>
                </div>
                <div className="cancel-function pull-right"> 
                  <span className="icon-cancel fa-2x pad-r-md"></span> 
                </div>
              </li>
              <li>
                <div className="edit-content-wrapper pad-l-lg">
                  <div className="edit-track-title pad-b-sm">
                    <h3>Satori</h3>
                    <h3 className="pull-right">2:33</h3>
                  </div>
                  <div className="edit-track-detail mar-r-md">
                    <p>File: satori_final.aif</p>
                    <p>File Size: 43.2mb</p>
                    <p>Status: approved</p>
                  </div>
                  <a className="mar-t-sm pull-right"><p>Replace</p></a>
                </div>
                <div className="cancel-function pull-right"> 
                  <span className="icon-cancel fa-2x pad-r-md"></span> 
                </div>
              </li>
            </ul>
          </div>  
        </div>
    )
  }
});