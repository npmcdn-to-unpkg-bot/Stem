var SubmitMusicTrack = React.createClass({
  getInitialState: function() {
    return {
      browseButtonVisible: true,
      loaderVisible: false,
      loadedItemVisible: false
    }
  },
  handleBrowse: function() {
    if (this.state.browseButtonVisible) {
      this.setState({ browseButtonVisible: false });
      this.setState({ loaderVisible: true });
      setTimeout(this.handleLoadAnimation, 8000);
    }
  },
  handleLoadAnimation: function() {
    this.setState({ loaderVisible: false });
    this.setState({ loadedItemVisible: true});
  },
  buttonReset: function() {
    this.setState({ loadedItemVisible: false});
    this.setState({ browseButtonVisible: true});
  },
  render: function() {
    return(
      <div className="submit-track-wrapper">
        <SubmitTrackEdit />
        <div className="submit-track-name col-lg-6">
          <p>Track Name</p>
          <input />
           {this.state.browseButtonVisible ? <button className="btn-primary pull-right" onClick={this.handleBrowse}>Browse for file</button> : null }
           {this.state.loaderVisible ? <LoadingAnimation /> : null }
           {this.state.loadedItemVisible ? <div className="loaded-track pull-right"><p>satori.aiff (50mb)</p> <i onClick={this.buttonReset} className="icon-cancel pull-right"></i></div> : null }
        </div>
        <div className="col-lg-6">
          <p>ISRC # <a>Whats an ISRC#?</a></p>
          <input placeholder="( optional )" />
        </div> 
        <div className="col-lg-6">
          <p>Release Date - MM/DD/YY</p>
          <input placeholder="( optional )" />
        </div>
        <div className="col-lg-6">
          <p>Additionl Credits</p>
          <input placeholder="( optional )" />
        </div>
        <div className="col-lg-6">
          <p>Genre</p>
          <select className="btn col-xs-12">
            <option>Rock</option>
            <option>Techno</option>
            <option>Folk</option>
          </select>
        </div>
        <div className="col-lg-6">
          <p>Genre</p>
          <select className="btn col-xs-12">
            <option>Rock</option>
            <option>Techno</option>
            <option>Folk</option>
          </select>
        </div>
        <div className="submit-add-genre pad-t-md pad-b-md col-xs-12">
          <a><i className="icon-plus-circled fa-2x"></i> Add Genre</a>
        </div>
        <div className=" pad-b-sm col-xs-12">
          <p>Lyrics <a> Why upload lyrics?</a></p>
          <textarea placeholder="Paste your lyrics here.." />
        </div>
        <div className="explicit-checkbox pad-b-lg col-xs-12 red">
          <input type="checkbox" />
          <h5 className="pad-l-sm">EXPLICIT</h5>
        </div> 
        <div className="submit-btns">
          <button className="additional-track-btn mar-r-md"><i className="icon-plus-circled"></i> Add Additional Tracks</button>
          <button className="btn-primary"><i className="icon-ok-circled2"></i> Submit</button>
        </div>
      </div>
    )
  }
});

// var BrowseButton = React.createClass({
//   render: function(props) {
//     return(
//       <button className="btn-primary pull-right" onClick={this.handleBrowse}>Browse for file</button>
//     )
//   }
// });

var LoadingAnimation = React.createClass({
  render: function() {
    return(
      <div className="loader col-xs-12 pull-right">
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__ball"></div>
      </div>
    )
  }
});