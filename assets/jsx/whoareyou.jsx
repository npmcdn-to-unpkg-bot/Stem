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
							<div className="col-sm-4 pad-l-lg">
								<span className="spacer">
									<img onClick={this.handleClick.bind(self, 1)} className="btn-circle" width="200px" src="assets/images/WhoRU_Creator.png" />
								</span>
								<h4 className="pad-b-md">Creator</h4>
							</div>
							<div className="col-sm-4">
								<span className="spacer">
									<img onClick={this.handleClick.bind(self, 2)} className="btn-circle" width="200px" src="assets/images/WhoRU_Musician.png" />
								</span>
								<h4 className="pad-b-md">Musician</h4>
							</div>
							<div className="col-sm-4 pad-r-lg">
								<span className="spacer">
									<img onClick={this.handleClick.bind(self, 3)} className="btn-circle" width="200px" src="assets/images/WhoRU_Manager.png" />
								</span>
								<h4 className="pad-b-md">Manager/Agent</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});