var ArtistProfileTable = React.createClass({
	render: function() {
		var rows = this.props.songs.map(function(song, index) {
			return (
				<ArtistProfileTableRow key={index} song={song} />
			);
		});

		return (
	  		<div className="artist-table-wrapper bg-white col-xs-12">
				<table>
		  			<ArtistProfileTableHeader />
		  			<tbody>
		  				{rows}
		  			</tbody>
				</table>
	  		</div>
		);
	}
});