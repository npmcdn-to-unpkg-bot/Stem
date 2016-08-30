var SubmitTrackEdit = React.createClass({
  render: function() {
    return(
      <div className="submit-track-edit-wrapper col-xs-12">
        <p className="order-track">Order</p>
        <p>Track Name</p>
        <ul>
          <li className="pad-b-sm">
            <i className="icon-down-open fa-2x"></i>
            <input value="Satori" />
            <div className="loaded-track mar-l-md">satori.aiff(50mb) </div>
            <ul className="song-edit-tags">
              <li className="submit-edit-tag-item">Rock & Roll</li>
              <li className="submit-edit-tag-item">Pop</li>
            </ul>
            <i className="icon-edit submit-edit-icon pull-right fa-2x"></i>
          </li>
        </ul>
      </div>
    )
  }
});