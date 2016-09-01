var SubmitTrackEdit = React.createClass({
  render: function() {
    return(
      <div className="submit-track-edit-wrapper col-xs-12">
        <p className="order-track">{ this.props.playerStateVisible ? "Order" : null }</p>
        <p>Track Name</p>
        <ul>
          <li className="pad-b-sm">
            { this.props.playerStateVisible ? <i className="icon-down-open fa-2x"></i> : null }
            { this.props.playerStateVisible ? null : <i className="icon-play-2 primary fa-2x"></i> }
            
            <span>{ this.props.track.trackName }</span>

            <div className="loaded-track mar-l-md">satori.aiff(50mb) </div>
            <ul className="song-edit-tags">
              <li className="submit-edit-tag-item">Rock & Roll</li>
              <li className="submit-edit-tag-item">Pop</li>
            </ul>
            { this.state.playerStateVisible ? null : <div className="live-state submit-track-state pull-right">Live</div> }
            <i className="icon-edit submit-edit-icon pull-right fa-2x"></i>
          </li>   
          <li className="pad-b-sm">
            {this.state.playerStateVisible ? <i className="icon-down-open fa-2x"></i> : null }
            {this.state.playerStateVisible ? null : <i className="icon-play-2 primary fa-2x"></i> }
            <input />
            <div className="loaded-track mar-l-md">satori.aiff(50mb) </div>
            <ul className="song-edit-tags">
              <li className="submit-edit-tag-item">Rock & Roll</li>
              <li className="submit-edit-tag-item">Pop</li>
            </ul>
            { this.state.playerStateVisible ? null : <div className="approved-state submit-track-state pull-right">Approved</div> }
            <i className="icon-edit submit-edit-icon pull-right fa-2x"></i>
          </li>
          <li className="pad-b-sm">
            {this.state.playerStateVisible ? <i className="icon-down-open fa-2x"></i> : null }
            {this.state.playerStateVisible ? null : <i className="icon-play-2 primary fa-2x"></i> }
            <input />
            <div className="loaded-track mar-l-md">satori.aiff(50mb) </div>
            <ul className="song-edit-tags">
              <li className="submit-edit-tag-item">Rock & Roll</li>
              <li className="submit-edit-tag-item">Pop</li>
            </ul>
            { this.state.playerStateVisible ?null : <div className="pending-state submit-track-state pull-right">Pending</div> }
            <i className="icon-edit submit-edit-icon pull-right fa-2x"></i>
          </li>
        </ul>
      </div>
    )
  }
});