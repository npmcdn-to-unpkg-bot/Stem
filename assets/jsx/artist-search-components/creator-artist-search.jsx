var ArtistSearch = React.createClass({

  render: function() {
    var self = this;

    return (
      <div>
        <ArtistSearchSideBar />
        <ArtistSearchResultsTable />
      </div>
    )
  }
});