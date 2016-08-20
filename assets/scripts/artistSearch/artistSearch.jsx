var ArtistSearch = (function() {
	var ArtistSearchComp = React.createClass({

		render: function() {
			return (
				<span>
					<div className="sidebar search-sidebar-tablet">
						<ArtistSearchSideBar />
					</div>
					<div className="content-with-sidebar">  
						<ArtistProfileTable songs={this.props.searchResults} />
					</div>  
				</span>
			)
		}
	});

	function mapStateToProps(state) {
		return {
			searchResults: state.songSearchResults
		};
	}

	function mapDispatchToProps(dispatch, ownProps) {
		return {
			testClicker: function() {
				//dispatch()
			}
		};
	}

	return ReactRedux.connect(mapStateToProps, mapDispatchToProps)(ArtistSearchComp);
})();