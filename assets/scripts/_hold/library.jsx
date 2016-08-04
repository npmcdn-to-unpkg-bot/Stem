var ArtistInternalLibraryTable = React.createClass({
  getInitialState: function() {
    return {
      underlineApproved: true,
      underlinePending: false,
      underlineDisabled: false,
      underlineRejected: false,
    }
  },
  handleApproved: function () {
    this.setState({ 
      underlineApproved: true,
      underlinePending: false,
      underlineDisabled: false,
      underlineRejected: false
    });
  },
  handlePending: function () {
    this.setState({ 
      underlineApproved: false,
      underlinePending: true,
      underlineDisabled: false,
      underlineRejected: false
    });
  },
  handleDisabled: function () {
    this.setState({ 
      underlineApproved: false,
      underlinePending: false,
      underlineDisabled: true,
      underlineRejected: false
    });
  },
  handleRejected: function () {
    this.setState({ 
      underlineApproved: false,
      underlinePending: false,
      underlineDisabled: false,
      underlineRejected: true
    });
  },
  render: function () {
    var self = this;
    return (
        <div className='artist-internal-library-wrapper col-lg-12'>
          <div className="library-approval-list row no-gutters pad-b-lg">
            <ul className="row no-gutters col-sm-12">
              <li className="col-sm-3"><h4><span className={this.state.underlineApproved ? "library-list-underline" : null} onClick={this.handleApproved}>Approved</span></h4></li>
              <li className="col-sm-3"><h4><span className={this.state.underlinePending ? "library-list-underline" : null} onClick={this.handlePending}>Pending</span></h4></li>
              <li className="col-sm-3"><h4><span className={this.state.underlineDisabled ? "library-list-underline" : null} onClick={this.handleDisabled}>Disabled</span></h4></li>
              <li className="col-sm-3"><h4><span className={this.state.underlineRejected ? "library-list-underline" : null} onClick={this.handleRejected}>Rejected</span></h4></li>
            </ul>
          </div>
            <div className={this.state.underlineApproved ? "display-true" : "display-false"}>
              <LibraryApproved />
            </div>
            <div className={this.state.underlinePending ? "display-true" : "display-false"}>
              <LibraryPending />
            </div>
            <div className={this.state.underlineDisabled ? "display-true" : "display-false"}>
              <LibraryDisabled />
            </div>
            <div className={this.state.underlineRejected ? "display-true" : "display-false"}>
              <LibraryRejected />
            </div>
        </div>  
    )
  }
});

