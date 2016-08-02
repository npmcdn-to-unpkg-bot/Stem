var ArtistContactInfo = React.createClass({
	handleSave: function() {
		var self = this,
			data = $("#contactInfoSettings").serialize();
		console.log('data = ' + data);

		$.ajax({
			type: "PUT",
			url: this.context.baseAPI + '/Account',
			headers: { 'Authorization': this.context.authToken },
			contentType: "application/json; charset=utf-8",
			dataType: 'json',
			data: data,
			success: function (response) {
				console.log('success!');
				console.log(JSON.stringify(response, null, 2));
				// store.dispatch({
				// 	type: 'UpdateUserRecord',
				// 	data: {userInfo: response, currentPage: 4}
				// });
			},
			error: function(response) {
				console.error(JSON.stringify(response, null, 2));
			}
		}); 
	},

	render: function() {
		return(
			<form id="contactInfoSettings">
				<div className="artist-password-wrapper col-xs-12">
					<div className="col-xs-12 pad-b-lg">
						<h3>Contact Information</h3>
						<h5>We may contact you occasionally for opportunities</h5>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 pad-b-md">
						<h4>Primary Contact</h4>
					</div>
					<div className="col-xs-12 col-sm-8 col-md-5 col-lg-5 pad-b-sm">
						<input placeholder="First Name" />
						<input placeholder="Mobile Number" />
						<input placeholder="Street Address" />
						<select className="btn btn-wide">
							<option value="AL">AL</option>
							<option value="AK">AK</option>
							<option value="AZ">AZ</option>
							<option value="AR">AR</option>
							<option value="CA">CA</option>
							<option value="CO">CO</option>
							<option value="CT">CT</option>
							<option value="DE">DE</option>
							<option value="FL">FL</option>
							<option value="GA">GA</option>
							<option value="HI">HI</option>
							<option value="ID">ID</option>
							<option value="IL">IL</option>
							<option value="IN">IN</option>
							<option value="IA">IA</option>
							<option value="KS">KS</option>
							<option value="KY">KY</option>
							<option value="LA">LA</option>
							<option value="ME">ME</option>
							<option value="MD">MD</option>
							<option value="MA">MA</option>
							<option value="MI">MI</option>
							<option value="MN">MN</option>
							<option value="MS">MS</option>
							<option value="MO">MO</option>
							<option value="MT">MT</option>
							<option value="NE">NE</option>
							<option value="NV">NV</option>
							<option value="NH">NH</option>
							<option value="NJ">NJ</option>
							<option value="NM">NM</option>
							<option value="NY">NY</option>
							<option value="NC">NC</option>
							<option value="ND">ND</option>
							<option value="OH">OH</option>
							<option value="OK">OK</option>
							<option value="OR">OR</option>
							<option value="PA">PA</option>
							<option value="RI">RI</option>
							<option value="SC">SC</option>
							<option value="SD">SD</option>
							<option value="TN">TN</option>
							<option value="TX">TX</option>
							<option value="UT">UT</option>
							<option value="VT">VT</option>
							<option value="VA">VA</option>
							<option value="WA">WA</option>
							<option value="WV">WV</option>
							<option value="WI">WI</option>
							<option value="WY">WY</option>
						</select>
					</div>
					<div className="col-xs-12 col-sm-8 col-md-5 col-lg-5">
						<input placeholder="Last Name" />
						<input placeholder="Alternate Email Address" />
						<input placeholder="City" />
						<input placeholder="Zip" />
					</div> 
					<div className="col-xs-12">
						<div className="pull-right">
							<button onClick={this.handleSave} className="btn btn-sm btn-primary">
								<span className="icon-ok-circle"> </span> Save
							</button>
						</div>
					</div>
				</div>
			</form>
		)
	}
});

ArtistContactInfo.contextTypes = {
	baseAPI: React.PropTypes.string,
	authToken: React.PropTypes.string
};