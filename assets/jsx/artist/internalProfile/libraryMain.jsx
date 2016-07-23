var LibraryMain = React.createClass({
  render: function() {
    return(
      <div className="artist-internal-wrapper-fluid">
        <ArtistInternalSideBar />
        <div className=" pad-t-lg pad-l-lg row no-gutters col-sm-8 col-md-8 col-lg-9">
          <h3>Library</h3>
          <p>Manage your library of availible tracks</p>
          <ArtistInternalLibraryTable />
        </div>
      </div>
    )
  }
});