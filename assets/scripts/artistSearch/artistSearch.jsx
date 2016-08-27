var ArtistSearch = (function() {
	var ArtistSearchComp = React.createClass({

		render: function() {
			return (
				<span>
					<div className="sidebar search-sidebar-tablet">
						<ArtistSearchSideBar tagList={this.props.tagList} />
					</div>
					<div className="content-with-sidebar">
						{ this.props.searchResults.length === 0 ? 
							<ArtistSearchNoResultsHeader /> : 
							<ArtistSearchResultsTable songs={this.props.searchResults} />
						}
					</div>  
				</span>
			)
		}
	});

	//Make function to display top 10 bookmarked songs if search results come back empty

	function mapStateToProps(state) {
		return {
			searchResults: state.searchResults,
			tagList: state.tagList
		};
	}

	function mapDispatchToProps(dispatch, ownProps) {
		return {
			
		};
	}

	return ReactRedux.connect(mapStateToProps, mapDispatchToProps)(ArtistSearchComp);
})();