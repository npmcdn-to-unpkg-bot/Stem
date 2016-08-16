var ArtistProfile = React.createClass({
  render: function() {
    return(
      <span>
        <ArtistProfileHeader />
        <div className="content col-xs-12">
          <div className="col-sm-10 col-sm-offset-1">
            <ArtistProfileTable />
          </div> 
        </div>   
      </span>
    )
  }
});