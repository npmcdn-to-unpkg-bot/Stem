var ArtistSearchResultsTableHeader = React.createClass({
	render: function() {
		return (
			<thead>
				<tr>
					<th className="artist-search-table-header-items col-xs-12 col-sm-2 col-md-2 col-lg-3"><h4>Track/Artist</h4></th>
					<th className="artist-search-table-header-items col-xs-12 col-sm-2 col-md-2 col-lg-1"><h4>Album</h4></th>
					<th className="artist-search-table-header-items col-xs-12 col-sm-2 col-md-2 col-lg-1"><h4>Time</h4></th>
					<th className="artist-search-table-header-items col-xs-12 col-sm-2 col-md-2 col-lg-1"><h4>Downloads</h4></th>
					<th className="artist-search-table-header-items col-xs-12 col-sm-2 col-md-2 col-lg-1"><h4>Popular</h4></th>
					<th className="artist-search-table-header-items col-xs-12 col-sm-2 col-md-2 col-lg-1"><h4>Options</h4></th>
				</tr>
			</thead> );
	}
});