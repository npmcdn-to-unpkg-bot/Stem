var ArtistSearch = (function() {
	var ArtistSearchComp = React.createClass({

		render: function() {
			return (
				<span>
					<div className="sidebar search-sidebar-tablet">
						<ArtistSearchSideBar tagList={this.props.tagList} />
					</div>
					<div className="content-with-sidebar">  
						<ArtistSearchResultsTable songs={this.props.searchResults} />
					</div>  
				</span>
			)
		}
	});

	function mapStateToProps(state) {
		return {
			searchResults: state.songList,
			tagList: state.tagList
		};
	}

	function mapDispatchToProps(dispatch, ownProps) {
		return {
			
		};
	}

	return ReactRedux.connect(mapStateToProps, mapDispatchToProps)(ArtistSearchComp);
})();