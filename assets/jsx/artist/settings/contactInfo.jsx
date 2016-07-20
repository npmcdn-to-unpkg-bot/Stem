var ArtistContactInfo = React.createClass({
  render: function() {
    return(
      <div className="artist-setting-contact-info-wrapper col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="artist-contact-setting-header col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3>Contact Information</h3>
          <h5>We may contact you occasionally for opportunities</h5>
        </div>
        <div className="artist-contact-h4 col-sm-2 col-md-2 col-lg-2">
          <h4>Primary Contact</h4>
        </div>
        <div className="artist-contact-form-input col-xs-12 col-sm-8 col-md-5 col-lg-5">
          <input className="col-xs-12 col-sm-12 col-md-12 col-lg-12" placeholder="First Name" />
          <input className="col-xs-12 col-sm-12 col-md-12 col-lg-12" placeholder="Mobile Number" />
          <input className="col-xs-12 col-sm-12 col-md-12 col-lg-12" placeholder="Street Address" />
          <select className="btn col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
        <div className="artist-contact-form-input col-sm-8 col-sm-offset-2 col-md-5 col-md-offset-0  col-lg-5">
          <input className="col-xs-12 col-sm-12 col-md-12 col-lg-12" placeholder="Last Name" />
          <input className="col-xs-12 col-sm-12 col-md-12 col-lg-12" placeholder="Alternate Email Address" />
          <input className="col-xs-12 col-sm-12 col-md-12 col-lg-12" placeholder="City" />
          <input className="col-xs-12 col-sm-12 col-md-12 col-lg-12" placeholder="Zip" />
        </div> 
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <button className="save-btn pull-right"><h4><span className="glyphicon glyphicon-ok-circle"> </span> Save</h4></button>
        </div> 
      </div>
    )
  }
});