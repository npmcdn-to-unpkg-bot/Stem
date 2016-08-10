var Footer = React.createClass({
  render: function() {
    return (
      <div className="footer-wrapper pad-box-sm">
        <ul>
          <li><a className="brand">Stem</a></li>
          <li>  
            <div>
              <h5>Made with love in Santa Monica, CA</h5>
              <p>Copyright 2016 - Thematic, Inc.</p>
            </div>
          </li>
          <li className="pull-right">
            <ul>
              <li>FAQ</li>
              <li>Terms/Conds</li>
              <li>Contact Us</li>
            </ul>
          </li>
        </ul>    
      </div>  
    )
  }
});