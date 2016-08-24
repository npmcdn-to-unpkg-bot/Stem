var AdminHeader = React.createClass({
  getInitialState: function() {
    return {
      displayAdminNav: false,
    }
  },

  showHideNav: function() {
    if(this.state.displayAdminNav) {
      this.setState({displayAdminNav: false});
    } else {
      this.setState({displayAdminNav: true});
    }
  },

  render: function() {
    var self = this;

    return(
      <div className="admin-header bg-primary pad-box-sm">
        <h2 className="thematic-title white mar-l-sm">Thematic</h2>
        <span onClick={this.showHideNav} className="icon-menu fa-2x pull-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></span>
        <AdminSideNav displayAdminNav={this.state.displayAdminNav} showHideNav={self.showHideNav} alignment="right"/>
      </div>
    )
  }
});