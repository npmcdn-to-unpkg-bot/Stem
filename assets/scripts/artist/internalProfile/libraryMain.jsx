var LibraryMain = React.createClass({
  render: function() {
    return(
      <div className="artist-internal-wrapper mar-t-sm">
        <ArtistInternalSideBar />
        <div className="artist-internal-greeting pad-t-lg pad-l-lg bg-white">
          <h3>Submit Music</h3>
          <p>Add music to your library</p>
        </div>
        <div className="library-filter pad-t-lg pull-right">
          <ul className="pad-t-md">
            <li><h4>All</h4></li>
            <li><h4>Approved</h4></li>
            <li><h4>Pending</h4></li>
            <li><h4>Disabled</h4></li>
            <li><h4>Rejected</h4></li>
          </ul>
        </div> 
      </div>
    )
  }
});