var Content = React.createClass({
    getInitialState: function() {
       return { 
				focused: 0,
				items: ['Home', 'Musicians', 'Creators', 'Blog', 'Contact'],
				displayLoginPage: false
			};
    },
	
    navClicked: function(index) {
		if(index == 5) {
			this.setState({displayLoginPage: true});
		} else {
			this.setState({displayLoginPage: false});
		}
        this.setState({focused: index});
    },
	
    render: function() {
        var self = this;
		
		return (
			<div>
				<nav className="navbar">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-index">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>            
						<a className="brand" onClick={self.navClicked.bind(self,0)}>
							Stem
						</a>
					</div>	
					<div className="collapse navbar-collapse" id="navigation-index">
						<ul className="nav navbar-nav navbar-right">
							{ this.state.items.map(function(i, index) {
		        				if(index != 0) {
									return <li onClick={self.navClicked.bind(self, index)}><a>{i}</a></li>;
								}
							})}    
							<li onClick={self.navClicked.bind(self, 5)}><a className="login">Login / Signup</a></li>
						</ul>
					</div>
					<div className={this.state.displayLoginPage ? "display-true" : "display-false"}>
						<div id="r-login"></div>
					</div>
				</nav>
				  
				{ this.state.focused == 0 ?
					<div className="container">
						<h1>
							Hello { sessionStorage.getItem('userFirstName') }
						</h1>
					</div>
				: null}
				
				{ this.state.focused == 1 ?
					<div className="container">
						<br /><br />
						<h1>
							Musicians Page Coming Soon
						</h1>
					</div>
				: null}	
				  
				{ this.state.focused == 2 ?
					<div className="container">
						<br /><br />
						<h1>
							Creators Page Coming Soon
						</h1>
					</div>
				: null}
				
				{ this.state.focused == 3 ?
					<div className="container">
						<br /><br />
						<h1>
							Blog Coming Soon
						</h1>
					</div>
				: null}
				
				{ this.state.focused == 4 ?
					<div className="container">
						<br /><br />
						<h1>
							Contact Page Coming Soon
						</h1>
					</div>
				: null}		
			</div>
		);
	}
});

ReactDOM.render(
    <Content />,
    document.getElementById('r-content')
);
