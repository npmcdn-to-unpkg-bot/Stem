var CreatorProfile = React.createClass({
	
    render: function() {
        var self = this;
		
		return (
			<div>
				<CreatorHeader />
				<CreatorStatsBar />
				<CreatorTimeline />
			</div>	
		);
	}
});
