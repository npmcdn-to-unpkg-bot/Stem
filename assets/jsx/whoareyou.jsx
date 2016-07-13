var WhoAreYou = React.createClass({
	handleClick: function(id) {
		var self = this;

        $.ajax({
            type: "POST",
            url: this.props.baseAPI + '/Account',
            headers: { 'Authorization': this.props.authToken },
            contentType: "application/json; charset=utf-8",
			dataType: 'json',
			data: JSON.stringify({AccountType: id}),
            success: function (response) {
				console.log('success!');
				console.log(JSON.stringify(response, null, 2));
		        store.dispatch({
					type: 'UpdateUserRecord',
					data: {userInfo: response, currentPage: 4}
		        });
            },
			error: function(response) {
				console.error(JSON.stringify(response, null, 2));
            }
        });	
	},


	render: function() {
		var self = this;

		return (	
			<div>
				<div id="bg">
					<img src="assets/images/handandfader.jpg" alt="" />
				</div>
				<div className="form">
					<div className="form-bg"></div>
					<div className="form-content">
						<div className="row">
						<h3>You made it! Thanks for joining up!</h3>
						</div>
						<div className="row spacer">
							<p>Help us customize your experience by letting us know who you are...</p>
						</div>
						<div className="row">
							<div className="col-s-4">
								<span className="spacer">
									<img onClick={this.handleClick.bind(self, 1)} className="btn btn-circle" src="http://90s411.com/images/office-space-lumbergh.jpg" />
								</span>
								<h4>Creator</h4>
							</div>
							<div className="col-s-4">
								<span className="spacer">
									<img onClick={this.handleClick.bind(self, 2)} className="btn btn-circle" src="https://lifeloofah.files.wordpress.com/2016/02/a-stapler.jpg" />
								</span>
								<h4>Musician</h4>
							</div>
							<div className="col-s-4">
								<span className="spacer">
									<img onClick={this.handleClick.bind(self, 3)} className="btn btn-circle" src="http://gifrific.com/wp-content/uploads/2012/07/michael-bolton-office-space-320x320.gif" />
								</span>
								<h4>Manager/Agent</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});