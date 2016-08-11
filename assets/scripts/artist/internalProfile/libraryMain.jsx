var LibraryMain = React.createClass({
  render: function() {
    return(
      <div className="artist-internal-wrapper">
        <div className="sidebar sidebar-hide">
        </div>
        <div className="library-content-wrapper pad-box-lg content-with-sidebar bg-white">  
          <div className="artist-internal-greeting bg-white">
            <h3>Library</h3>
            <p>Manage your library of availible tracks</p>
          </div>
          <div className="btn-wrapper pull-right pad-t-lg pad-r-lg">
            <button type="button" className="btn-primary"><h3><span className="icon-up-circled"></span> Submit Music</h3></button>
          </div>
          <div className="library-filter">
            <ul className="pad-t-md">
              <li><h4>All</h4></li>
              <li><h4>Approved</h4></li>
              <li><h4>Pending</h4></li>
              <li><h4>Disabled</h4></li>
              <li><h4>Rejected</h4></li>
            </ul>
          </div>
          <LibraryResultTable />
        </div> 
      </div>
    )
  }
});