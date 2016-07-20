var Login = React.createClass({
    getInitialState: function() {
            return {
                currentUser: true,
                Username: '',
                Password: '',
                errorMessage: ''
            };
    },
    
    componentDidMount: function() {
        var self = this;
        
        this.oauthInit();
        
        window.fbAsyncInit = function() {
            FB.init({
                appId      : '1687096358206984',
                cookie     : true,  // enable cookies to allow the server to access the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v2.1' // use version 2.1
            });
            
            FB.Event.subscribe('auth.login', function(response) {
                self.checkLoginState()
            });

            FB.Event.subscribe('auth.logout', function(response) {
                self.checkLoginState()
            });   
            
            FB.getLoginStatus(function(response) {
                this.statusChangeCallback(response);
            }.bind(this));
        }.bind(this);
            
        // Load the SDK asynchronously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    },
    
    
    /////// BEGIN Google+ login
    oauthInit: function() {     
        gapi.signin2.render('g-signin2', {
            'scope': 'profile email',
            'width': 250,
            'height': 50,
            'longtitle': true,
            'theme': 'light',
            'onsuccess': this.onSignIn
        });     
    },
    
    onSignIn: function(googleUser) {
        let profile = googleUser.getBasicProfile();
        console.log('Successful login for: ' + profile.getName);
        console.log(JSON.stringify(profile, null, 2));
        
        this.upsertUser({ 
            Username: profile.getUsername()
        });
    },
    /////// END Google+ login
    
    /////// BEGIN Facebook login 
    fbLoginClick: function() {
        FB.login();
    },
    
    checkLoginState: function() {
        FB.getLoginStatus(function(response) {
            this.statusChangeCallback(response);
        }.bind(this));
    },
    
    statusChangeCallback: function(response) {
        var self = this;
        console.log('response.status = ' + response.status);
        if (response.status === 'connected') {
            console.log('Welcome!  Fetching your information.... ');
            FB.api('me?fields=id,name,first_name,last_name,email,picture,friends', function(response) {
                console.log('Successful login for: ' + response.name);
                console.log(JSON.stringify(response, null, 2));
                
                self.upsertUser({ 
                    FirstName: response.first_name, 
                    LastName: response.last_name, 
                    Email: response.email
                });
            }); 
        } 
    },
    /////// END Facebook login  
    
    /////// BEGIN Registration Form  
    handleClick: function(currentUser) {
        this.setState({ 
            currentUser: currentUser,
            errorMessage: ''
        });
    },
    
    handleUserNameChange: function(e) {
        this.setState({
            Username:e.target.value,
            errorMessage: ''
        });
    },
    
    handlePasswordChange: function(e) {
        this.setState({
            Password:e.target.value,
            errorMessage: ''
        });
    },

    handleConfirmPasswordChange: function(e) {
        this.setState({
            ConfirmPassword:e.target.value,
            errorMessage: ''
        });
    },
    
    handleSubmit: function(e) {
        var currentUser = this.state.currentUser;
        
        e.preventDefault();
        var Username = this.state.Username;
        var Password = this.state.Password;
        var ConfirmPassword = this.state.ConfirmPassword;
        
        if(Username && Password && ConfirmPassword) {
        this.handleCommitSubmit({Username: Username, Password: Password, ConfirmPassword: ConfirmPassword, CurrentUser: currentUser });
        } 
        else {
            this.handleCommitSubmit({Username: Username, Password: Password});
        }
    },
    
    handleCommitSubmit: function(user) {
        var self = this,
            currentUser = this.state.currentUser,
            api = this.props.baseAPI;
        
        var cleanUsername = encodeURIComponent(user.Username);
        var cleanPassword = encodeURIComponent(user.Password);
        var cleanConfirmPassword = encodeURIComponent(user.ConfirmPassword);
        console.log('clean = ' + cleanUsername + cleanPassword + cleanConfirmPassword);
        
        if(user.CurrentUser) {
            var data = "grant_type=password&username=" + this.state.Username + "&password=" + this.state.Password;
            $.ajax({
                type: 'POST',
                url: 'http://52.32.255.104/token',
                data: data,
                success: function(response) {
                    console.log('success!');
                    console.log(JSON.stringify(response, null, 2));
                    sessionStorage.setItem('userId', response.Id);
                    sessionStorage.setItem('userFirstName', response.FirstName);
                    sessionStorage.setItem('userLastName', response.LastName);
                    sessionStorage.setItem('userEmail', response.Email);
                }.bind(this),
                error: function(xhr, status, err) {
                    this.setState({ errorMessage: '* We\'re having trouble finding you, please try again.' });
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });     
        } else {
            $.ajax({    
                type: 'POST',
                url: 'http://52.32.255.104/api/account/register',
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                data: JSON.stringify(user),
                success: function(response) {
                    console.log('success!');
                    console.log(JSON.stringify(response, null, 2));
                    sessionStorage.setItem('userId', response.Id);
                    sessionStorage.setItem('userUsername', response.Username);
                    sessionStorage.setItem('userPassword', response.Password);
                    sessionStorage.setItem('userConfirmPassword', response.ConfirmPassword);
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
        }
    },
    /////// END Registration Form
    
    upsertUser: function(user) {
        console.log('user = ' + JSON.stringify(user, null, 2));
        
        var self = this,
            api = this.props.api,
            cleanEmail = encodeURIComponent(user.Email);
        console.log('cleanEmail = ' + cleanEmail);
        
        $.ajax({
            type: 'GET',
            url: api + '/byEmail/' + cleanEmail,
            dataType: 'json',
            success: function(response) {
                console.log('success!');
                console.log(JSON.stringify(response, null, 2));
                self.confirmUpsertUser(response.Id, user);
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
                self.confirmUpsertUser(0, user);
            }.bind(this)
        }); 
    },
        
    confirmUpsertUser: function(id, user) {
        console.log('id = ' + id);
        console.log('user = ' + JSON.stringify(user, null, 2));
        
        var api = this.props.api;
        
        if(id > 0) {
            $.ajax({
                type: 'PUT',
                url: api + '/' + id,
                dataType: 'json',
                data: user,
                success: function(response) {
                    console.log('success!');
                    console.log(JSON.stringify(response, null, 2));
                    sessionStorage.setItem('userId', response.Id);
                    sessionStorage.setItem('userFirstName', response.FirstName);
                    sessionStorage.setItem('userLastName', response.LastName);
                    sessionStorage.setItem('userEmail', response.Email);
                    this.setState({
                        loggedin: true,
                        userName: response.FirstName
                    });
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });         
        } else {
            $.ajax({
                type: 'POST',
                url: api,
                dataType: 'json',
                data: user,
                success: function(response) {
                    console.log('success!');
                    console.log(JSON.stringify(response, null, 2));
                    sessionStorage.setItem('userId', response.Id);
                    sessionStorage.setItem('userFirstName', response.FirstName);
                    sessionStorage.setItem('userLastName', response.LastName);
                    sessionStorage.setItem('userEmail', response.Email);
                    this.setState({
                        loggedin: true,
                        userName: response.FirstName
                    });
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });         
        }       
    },
    
    logout: function() {
        FB.logout();
        
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('userFirstName');
        sessionStorage.removeItem('userLastName');
        sessionStorage.removeItem('userEmail');
        
        this.setState({loggedin: false});
    },
    
    render: function() {
        var self = this;
        
        return (    
            <div className="wrapper">
                <div className={this.state.loggedin ? "display-true" : "display-false"}>
                    <span className="spacer" />
                    Hello { this.state.userName }!
                    <br />
                    <a onClick={self.logout}>Logout</a>
                </div>
                    
                <div className={this.state.loggedin ? "display-false" : "display-true"}>
                    <div className="r-container">
                        <span className="spacer" />
                        {this.state.currentUser ? 
                            <h4>Sign In</h4>
                        :
                            <h4>Sign Up</h4>
                        }
                        <form>                          
                            <div className="login-btn abcRioButton abcRioButtonLightBlue" onClick={this.fbLoginClick}>
                                <div className="abcRioButtonContentWrapper">
                                    <div className="abcRioButtonIcon">
                                        <div className="icon">
                                            <span className="fa fa-facebook" />
                                        </div>
                                    </div>
                                    <span className="abcRioButtonContents">
                                        <span>Sign in with Facebook</span>
                                    </span>
                                </div>
                            </div>
                            <div className="login-btn" id="g-signin2" data-onsuccess={this.onSignIn} />
                            <span className="spacer" />
                            <p>or be classical...</p>                           
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <span className="glyphicon glyphicon-envelope"></span>
                                </span>
                                <input type="userName" className="form-control" value={this.state.Username} onChange={this.handleUserNameChange} placeholder="Username..." />
                            </div>
                
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <span className="glyphicon glyphicon-lock"></span>
                                </span>
                                <input type="password" className="form-control" value={this.state.Password} onChange={this.handlePasswordChange} placeholder="Password..." />
                            </div>
                            
                            {!this.state.currentUser ? 
                                <div className="input-group">
                                <span className="input-group-addon">
                                    <span className="glyphicon glyphicon-lock"></span>
                                </span>
                                <input type="confirm_password" className="form-control" value={this.state.ConfirmPassword} onChange={this.handleConfirmPasswordChange} placeholder="Confirm Password..." />
                            </div>
                            : null }
                            
                            { this.state.errorMessage != '' ?
                                <span className="error">{this.state.errorMessage}</span>
                            : null }
                            
                            <button onClick={this.handleSubmit} className="btn btn-raised btn-primary login-btn">
                                Submit
                            </button>
                            
                            <span className="spacer">
                                {this.state.currentUser ? 
                                    <a onClick={this.handleClick.bind(self, false)}>Haven't signed up yet? Register here!</a>
                                :
                                    <a onClick={this.handleClick.bind(self, true)}>Return to sign in form.</a>
                                }
                            </span>
                        </form>
                            
                        <div id="fstatus"/>
                        <div id="gstatus"/>
                    </div>
                </div>
            </div>
        );
    }
});
///////////// END SIGN IN FORM
