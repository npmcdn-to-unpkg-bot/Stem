var ArtistSearchResultsTable = React.createClass({
	render: function() {
	return (
		<div className="col-xs-8 col-sm-9">
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