var ArtistSearchNoResultsHeader = React.createClass({
	render: function() {
		return(
			<div id="hide-me" className="artist-search-no-results-header mar-t-sm mar-b-lg pad-box-md bg-grad-1">
				<h2 className="modal-title">Unfortunately...</h2>
				<p><h4>Nothing in the library matches your search criteria.</h4></p>
				<p><h4>But these are some pretty rad songs you might dig anyway!</h4></p>
			</div>
		)
	}
});