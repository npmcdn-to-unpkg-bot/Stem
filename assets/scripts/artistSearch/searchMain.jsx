var ArtistSearch = React.createClass({

	render: function() {
		var self = this;

		return (
			<span>
				<div className="sidebar search-sidebar-tablet">
					<ArtistSearchSideBar />
				</div>
				<div className="content-with-sidebar ">  
					<ArtistProfileTable />
				</div>  
			</span>
		)
	}
});