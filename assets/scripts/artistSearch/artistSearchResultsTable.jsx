var ArtistSearchResultsTable = React.createClass({
	render: function() {
	return (
		<div className="artist-search-table-wrapper mar-t-lg">
	    	<table className="table col-xs-12 col-md-12 col-lg-12">
	        	<ArtistSearchResultsTableHeader />
	        	<tbody>
	        		{this.props.songs.map(function(song, index) {
						return (
							<ArtistSearchResultsTableRow key={index} song={song} />
						);
					})}
	        	</tbody>
	      	</table>
	  	</div>
		);
	}
});