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
						<div className="row spacer">
						<h3>You made it! Thanks for joining up!</h3>
						</div>
						<div className="row pad-b-md">
							<p>Help us customize your experience by letting us know who you are...</p>
						</div>
						<div className="row pad-r-md pad-l-md">
							<div className="col-sm-4">
								<img onClick={this.handleClick.bind(self, 1)} className="btn-circle" width="200px" src="assets/images/WhoRU_Creator.png" />
								<h4 className="pad-b-md spacer">Creator</h4>
							</div>
							<div className="col-sm-4">
								<img onClick={this.handleClick.bind(self, 2)} className="btn-circle" width="200px" src="assets/images/WhoRU_Musician.png" />
								<h4 className="pad-b-md spacer">Musician</h4>
							</div>
							<div className="col-sm-4">
								<img onClick={this.handleClick.bind(self, 3)} className="btn-circle" width="200px" src="assets/images/WhoRU_Manager.png" />
								<h4 className="pad-b-md spacer">Manager/Agent</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});