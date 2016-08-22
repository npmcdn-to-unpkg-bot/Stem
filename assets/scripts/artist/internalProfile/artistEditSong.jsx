var ArtistEditSong = React.createClass({
  render: function() {
    return (
      <div className="edit-song-detail-wrapper col-xs-12 col-md-6 bg-white pad-t-md pad-l-lg pad-r-lg pad-b-lg">
        <div className="edit-song-form col-lg-10 pad-t-md">
          <form>
            <h4>Artist(s)</h4>
            <input value="InMemory" />
            <h4>Song Title</h4>
            <input value="Fake Plastic Trees" />
            <h4>Lyrics<span className="lyric-link pad-l-sm"><a>Why upload lyrics?</a></span></h4>
            <textarea className="pad-box-md" placeholder="Lots of words..." />
            <div className="explicit-check red pull-right">
              <input type="checkbox" /> 
              <h5>EXPLICIT</h5>
            </div>
            <h4>Genre</h4>
            <select className="btn mar-b-md">
              <option>Select Genre</option>
            </select>
            <a><h4><span className="icon-plus-circled">Add Genre</span></h4></a>
            <h4>Addintional track credits</h4>
            <input placeholder="(Option)" />
            <h4>ISRC # <span className="lyric-link pad-l-sm"><a>What's an ISRC #?</a></span></h4>
            <input placeholder="(Option)" />
            <h4>Release Date - MM/DD/YYYY</h4>
            <input placeholder="(Option)" />
            <button className="btn-primary pull-right icon-ok-circled2">Save</button>
          </form>
        </div>
      </div>
    )
  }
});