var AdminHeader = React.createClass({
	render: function() {
		return(
			<div className="admin-header bg-primary pad-box-sm">
				<h2 className="thematic-title white mar-l-sm">Thematic</h2>
				<h2 className="icon-menu pull-right"></h2>
			</div>
		)
	}
});

var AdminDashboardToolBox = React.createClass({
	setVariables: function(icon, number, title) {
		return{
			instanceIcon: icon,
			instanceNumber: number,
			instanceTitle: title
		}
	},

	render: function() {
		return(
			<div className="admin-dashboard-box">
				<h1 className={"admin-dash-box-icon " + this.props.instanceIcon }></h1>
				<h1 className="stats">{this.props.number}</h1>
				<h1 className="title">{this.props.title}</h1>
			</div>
		)
	}
});

var AdminDashboard = React.createClass({
	render: function() {
		return(
			<div className="">
				<AdminHeader />
				<div className="admin-dash-bottom">
					<ul className="timeline-nav mar-t-lg mar-b-lg">
						<li className="mar-l-md">Today</li>
						<li className="mar-l-md">Last 7</li>
						<li className="mar-l-md">Last 30</li>
						<li className="mar-l-md">Last 60</li>
						<li className="mar-l-md">Last 90</li>
						<li className="mar-l-md">Total</li>
					</ul>	
					<div className="admin-dash-toolboxes">
						<div className="admin-dashboard-box display-inlb bg-primary pad-box-md">
							<span className="admin-dash-box-icon icon-videocam fa-4x white pull-left mar-r-md mar-l-sm mar-t-md"></span>
							<h2 className="stats mar-t-md mar-b-sm">622</h2>
							<h2 className="title mar-b-sm">New Creators</h2>
						</div>
						<div className="admin-dashboard-box display-inlb bg-primary pad-box-md">
							<span className="admin-dash-box-icon icon-up-circled fa-4x white pull-left mar-r-md mar-l-sm mar-t-md"></span>
							<h2 className="stats mar-t-md mar-b-sm">226</h2>
							<h2 className="title mar-b-sm">New Submissions</h2>
						</div>
						<div className="admin-dashboard-box display-inlb pad-box-md">
							<span className="admin-dash-box-icon icon-down-circle fa-4x primary pull-left mar-r-md mar-l-sm mar-t-md"></span>
							<h2 className="stats mar-t-md mar-b-sm primary">622</h2>
							<h2 className="title mar-b-sm primary">Downloads</h2>
						</div>
						<div className="admin-dashboard-box display-inlb pad-box-md">
							<span className="admin-dash-box-icon icon-headphones-2 fa-4x primary pull-left mar-r-md mar-l-sm mar-t-md"></span>
							<h2 className="stats mar-t-md mar-b-sm primary">226</h2>
							<h2 className="title mar-b-sm primary">New Artists</h2>
						</div>
						<div className="admin-dashboard-box display-inlb bg-grey-5 pad-box-md">
							<h2 className="large-toolbox-text primary">ACTIVE CREATORS</h2>
						</div>
						<div className="admin-dashboard-box display-inlb bg-grey-5 pad-box-md">
							<h2 className="large-toolbox-text primary">TOP ARTISTS</h2>
						</div>
					</div>			
				</div>
			</div>
		)
	}
})