var ArtistEditAlbum = React.createClass({
  render: function() {
    return(
      <div className="edit-album-detail-wrapper col-xs-12 col-md-6 bg-white pad-t-md pad-l-lg pad-b-lg">
        <div className="edit-album-form col-lg-10 pad-t-md">
          <form>
            <h4>Album</h4>
            <input value="Album Title Yay!" />
            <h4>Release Date - MM/DD/YYYY</h4>
            <input placeholder="(Optional)" />
            <h4>UPC/EAN</h4>
            <input placeholder="(Optional)" />
            <img className="album-edit-img mar-b-lg mar-t-lg" src="https://i.ytimg.com/vi/ypX5RiWRPIQ/maxresdefault.jpg" />
            <button className="btn-primary pull-right icon-ok-circled2">Save</button>
          </form>
        </div>
      </div>
    )
  }
});