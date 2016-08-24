var AdminSideNav = React.createClass({
	showHideNav: function() {
		this.props.showHideNav();
	},

	render: function() {
		return(
			<div className={(this.props.displayAdminNav ? "admin-side-nav-main" : "admin-side-nav-main-hidden")}>
				<nav className="admin-side-nav">
					<span className="admin-cancel icon-cancel fa-3x white" onClick={this.showHideNav}></span>
					<img className="admin-side-nav-image" src="http://static.communitytable.parade.com/wp-content/uploads/2013/11/slowcooker-meatloaf-ftr.jpg?ggnoads=1"></img>
					<div className="admin-nav-items">
						<ul>
							<li className="pad-b-md pad-t-md pad-l-lg"><h4>Dashboard</h4></li>
							<li className="pad-b-md pad-t-md pad-l-lg"><h4>New Creators</h4></li>
							<li className="pad-b-md pad-t-md pad-l-lg"><h4>New Submissions</h4></li>
								<li className="admin-nav-sub-items pad-b-md pad-t-md"><h4>Approved Submissions</h4></li>
								<li className="admin-nav-sub-items pad-b-md pad-t-md"><h4>Rejected Submissions</h4></li>
							<li className="pad-b-md pad-t-md pad-l-lg"><h4>Downloads</h4></li>
							<li className="pad-b-md pad-t-md pad-l-lg"><h4>Active Creators</h4></li>
							<li className="pad-b-md pad-t-md pad-l-lg"><h4>Top Artists</h4></li>
							<li className="pad-b-md pad-t-md pad-l-lg"><h4>Browse Music</h4></li>
						</ul>
					</div>
				</nav>
				<div className="modal-background dark-modal-bg"></div>
			</div>
		)

	}
})