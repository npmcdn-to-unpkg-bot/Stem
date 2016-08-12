var PlaylistMain = React.createClass({
    render: function() {
        var self = this;
		
		return (
			<span>
				<PlaylistHeader />
				<PlaylistTable />
				<PlaylistMobileView />
			</span>	
		);
	}
});
