var SubmitMusicTrack = React.createClass({
	getInitialState: function() {
		return {
			trackNumber: 0,
			isExplicit: false,
		  	trackName: null,
		  	isrc: null,
		  	releaseDate: null,
		  	additionalCredits: null,
		  	audioFile: null,
		  	selectedGenres: null,
		  	genreTag: null,
		  	genreTagValues: []
		}
	},
	componentDidMount: function() {
		stemApi.getAllTagTypes()
			.then(function(res) {
				var genreTag = res.find(function(item) {
					return item.systemType === Tag.SystemType.Genre;
				});

				this.setState({
					genreTag: genreTag
				});

				return stemApi.getTagValues({
					tagTypeId: genreTag.id
				});

			}.bind(this))
			.then(function(res) {
				this.setState({
					genreTagValues: res
				});

			}.bind(this), function(reason) {
				console.log('Error fetching all tag types: ' + JSON.stringify(reason));
			});

	},
	onAudioChanged: function(file) {
		this.setState({
			audioFile: file
		});
	},
	handleInputChanged(ev) {
		var newState = {};

		newState[ev.target.name] = ev.target.value;
		this.setState(newState);
	},
	genreTagsUpdated: function(selections) {
		this.setState({
			selectedGenres: selections
		});
	},
	onAddClicked: function() {

	},
	validate: function() {
		// TODO: Implement visual validation later
		return this.state.trackName && this.state.trackName.length > 0 && 
		  	this.state.audioFile && 
		  	this.state.selectedGenres && this.state.selectedGenres.length > 0;
	},
	render: function() {
		return (
		  <div className="submit-track-wrapper">
			<SubmitTrackEdit />
			<div className="submit-track-name col-lg-6">
				<p>Track Name</p>
				<input name="trackName" onChange={ this.handleInputChanged } />
				<AudioUpload onAudioChanged={ this.onAudioChanged } />
			</div>
			<div className="col-lg-6">
				<p>ISRC # <a>Whats an ISRC#?</a></p>
				<input name="isrc" onChange={ this.handleInputChanged } placeholder="( optional )" />
			</div> 
			<div className="col-lg-6">
				<p>Release Date - MM/DD/YY</p>
				<input name="releaseDate" onChange={ this.handleInputChanged } placeholder="( optional )" />
			</div>
			<div className="col-lg-6">
				<p>Additionl Credits</p>
				<input name="additionalCredits" onChange={ this.handleInputChanged } placeholder="( optional )" />
			</div>
			<div className="col-lg-6">
				<TagSelector tag={ this.state.genreTag } tagList={ this.state.genreTagValues } onSelectionsChange={ this.genreTagsUpdated } />
			</div>
			<div className=" pad-b-sm col-xs-12">
				<p>Lyrics<a>Why upload lyrics?</a></p>
				<textarea onChange={ this.handleInputChanged } placeholder="Paste your lyrics here.." />
			</div>
			<div className="explicit-checkbox pad-b-lg col-xs-12 red">
				<input type="checkbox" name="explicit" onChange={ this.handleInputChanged } />
			  	<h5 className="pad-l-sm">EXPLICIT</h5>
			</div> 
			{ this.props.isAdmin ? <AdminButtons /> : 
				<SubmitButtons onSubmitClicked={ this.props.onSubmitClicked } onAddClicked={ this.addClicked } /> 
			}
		  </div>
		)
	}
});

var AdminButtons = React.createClass({
  render: function() {
    return(
      <div className="admin-state-btn-wrapper">
        <ul>
          <li>
            <div className="pending-state">Pending</div>
          </li>
          <li>
            <div className="approved-state">Approved</div>
          </li>
          <li>
            <div className="live-state">Live</div>
          </li>
          <li>
            <div className="save-state">Save & Close</div>
          </li>
        </ul>
      </div>
    )
  }
}); 

var SubmitButtons = React.createClass({
  render: function() {
    return(
      <div className="submit-btns">
        <button className="additional-track-btn mar-r-md" onClick={ this.props.onAddClicked }><i className="icon-plus-circled"></i> Add Additional Tracks</button>
        <button className="btn-primary" onClick={ this.props.onSubmitClicked }><i className="icon-ok-circled2"></i> Submit</button>
      </div>
    )
  }
}); 