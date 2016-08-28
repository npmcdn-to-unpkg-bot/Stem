var ArtistSearch = ReactRedux.connect(function(state) {
	return {
		searchResults: state.searchResults
	};
})(React.createClass({
	render: function() {
		return (
			<span>
				<div className="sidebar search-sidebar-tablet">
					<ArtistSearchSideBar />
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
}));