var ArtistSearch = React.createClass({

  render: function() {
    var self = this;

    return (
      <div>
        <ArtistNavBar />
        <ArtistSearchSideBar />
        <ArtistSearchResultsTable />
      </div>
    )
  }
});