var ArtistSearch = React.createClass({

  render: function() {
    var self = this;

    return (
      <div>
        <ArtistSearchSideBar />
        <div className="col-xs-9">
          <ArtistProfileTable />
        </div>
      </div>
    )
  }
});