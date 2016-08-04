var ArtistUploadSuccessTag = React.createClass({
	getInitialState: function(){
		return{
			genreVisible: false,
			communityVisible: false,
			vocalTypeVisible: false
		};
	},

	tagGenreOptionsToggle: function(){
		if(this.state.genreVisible == false) {
			this.setState({genreVisible: true});	
		} else {
			this.setState({genreVisible: false});
		};
	},

	tagCommunityOptionsToggle: function(){
		if(this.state.communityVisible == false) {
			this.setState({communityVisible: true});	
		} else {
			this.setState({communityVisible: false});
		};
	},

	tagVocalTypeOptionsToggle: function(){
		if(this.state.vocalTypeVisible == false) {
			this.setState({vocalTypeVisible: true});	
		} else {
			this.setState({vocalTypeVisible: false});
		};
	},

	render: function(){
		return(
			<div className="artist-upload-success-tags row">
					<div className="artist-tag-genre checkbox mar-l-sm mar-r-lg pad-t-lg pad-b-md">
						<h5 className="col-sm-2">Genre</h5>
						<label className="col-sm-2"><input type="checkbox" name="genre1" value="Alternative"/> Alternative</label>
						<label className="col-sm-2"><input type="checkbox" name="genre2" value="Rock"/> Rock</label>
						<label className="col-sm-2"><input type="checkbox" name="genre3" value="Country"/> Country</label>
						<label className="col-sm-2"><input type="checkbox" name="genre4" value="Pop"/> Pop</label>
						<h4 className="artist-tag-chevron-icon" onClick={this.tagGenreOptionsToggle} className={this.state.genreVisible ? "icon-up-open-1" : "icon-down-open-1"}></h4>
						<div className={this.state.genreVisible ? "artist-tag-checkbox-visible mar-t-sm" : "artist-tag-checkbox-hidden"}>
							<br />
							<label className="col-sm-2 col-sm-offset-2"><input type="checkbox" name="genre5" value="Indie"/> Indie</label>
							<label className="col-sm-2"><input type="checkbox" name="genre6" value="Classic"/> Classic</label>
							<label className="col-sm-2"><input type="checkbox" name="genre7" value="HeavyMetal"/> Heavy Metal</label>
							<label className="col-sm-2"><input type="checkbox" name="genre8" value="Folk"/> Folk</label>
							<label className="col-sm-2"><input type="checkbox" name="genre9" value="Other"/> Other</label>
						</div>
					</div>
					<div className="artist-tag-community checkbox mar-r-lg pad-t-lg pad-b-md">
						<h5 className="col-sm-2">Community</h5>
						<label className="col-sm-2"><input type="checkbox" name="community1" value="Beauty/Lifestyle"/> Beauty / Lifestyle</label>
						<label className="col-sm-2"><input type="checkbox" name="community2" value="HowTo"/> How To</label>
						<label className="col-sm-2"><input type="checkbox" name="community3" value="Style"/> Style</label>
						<label className="col-sm-2"><input type="checkbox" name="community4" value="Music"/> Music</label>
						<h4 className="artist-tag-chevron-icon" onClick={this.tagCommunityOptionsToggle} className={this.state.communityVisible ? "icon-up-open-1" : "icon-down-open-1"}></h4>
						<div className={this.state.communityVisible ? "artist-tag-checkbox-visible mar-t-sm" : "artist-tag-checkbox-hidden"}>
							<br />
							<label className="col-sm-2 col-sm-offset-2"><input type="checkbox" name="community5" value="Art"/> Art</label>
							<label className="col-sm-2"><input type="checkbox" name="community6" value="Film"/> Film</label>
							<label className="col-sm-2"><input type="checkbox" name="community7" value="Other"/> Other</label>
						</div>
					</div>
					<div className="artist-tag-vocal-type checkbox mar-r-lg pad-t-lg pad-b-md">
						<h5 className="col-sm-2">Vocal Type</h5>
						<label className="col-sm-2"><input type="checkbox" name="vocalType1" value="Female"/> Female</label>
						<label className="col-sm-2"><input type="checkbox" name="vocalType2" value="Male"/> Male</label>
						<label className="col-sm-2"><input type="checkbox" name="vocalType3" value="Duet"/> Duet</label>
						<label className="col-sm-2"><input type="checkbox" name="vocalType4" value="Acapella"/> Acapella</label>
						<h4 className="artist-tag-chevron-icon" onClick={this.tagVocalTypeOptionsToggle} className={this.state.vocalTypeVisible ? "icon-up-open-1" : "icon-down-open-1"}></h4>
						<div className={this.state.vocalTypeVisible ? "artist-tag-checkbox-visible mar-t-sm" : "artist-tag-checkbox-hidden"}>
							<br />
							<label className="col-sm-2 col-sm-offset-2"><input type="checkbox" name="vocalType5" value="Choir"/> Choir</label>
							<label className="col-sm-2"><input type="checkbox" name="vocalType6" value="AutoTuned"/> Auto-tuned</label>
							<label className="col-sm-2"><input type="checkbox" name="vocalType7" value="Other"/> Other</label>
						</div>
					</div>
				</div>
		);
	}
})
var ArtistUploadSuccessSlider = React.createClass({
	render: function(){
		return(
			<div className="artist-upload-success-slider mar-t-lg col-sm-12">
				<h5 className="col-sm-1 mar-r-lg">Tempo</h5>
				<input type="range" min="0" max="500" className="slider"/>
				<p className="col-sm-1">slow</p>
				<p className="col-sm-1 col-sm-offset-8">fast</p>
			</div>
		)
	}
});
var ArtistSuccessHeadingBox = React.createClass({
	render: function() {
		return(
			<div className="artist-success-box bg-grad-1 mar-t-sm pad-t-lg pad-b-md">
				<h2 className="white mar-b-md"><span className="icon-ok-circled white"></span>Success!</h2>
				<p className="white">Your song "SONG TITLE" has been submitted. We'll be in touch soon!</p>
			</div>	
		)
	}
});

var ArtistUploadSuccess = React.createClass({
	render: function(){
		return(
			<div className="artist-upload-success">
				<div className="row mar-b-lg">
					<ArtistSuccessHeadingBox />
				</div>
				<div className="artist-upload-success-bottom">
					<h3 className="mar-t-sm">Tag your song</h3>
					<p className="mar-t-sm">Help us make your song easy to discover</p>
					<ArtistUploadSuccessTag />
					<ArtistUploadSuccessSlider />
					<div className="artist-upload-tag-btns mar-t-lg col-sm-12">
						<button type="submit" className="btn bg-primary mar-t-lg pad-t-sm pad-b-sm pad-l-lg pad-r-lg pull-right"><h4>Add Tags</h4></button>
						<button type="" className="btn bg-grey-5 white mar-t-lg pad-t-sm pad-b-sm pad-l-lg pad-r-lg pull-right"><h4>Clear All</h4></button>
					</div>
				</div>
			</div>
		)
	}
});