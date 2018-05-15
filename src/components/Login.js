import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import AuthService from './AuthService';
import '../styles/Login.css';


class Login extends Component {
constructor() {
    super();
    this.state = {
        email: '',
        password: '',
        redirect: false 
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Auth = new AuthService;
}


handleEmailChange(event) {
    this.setState({email: event.target.value});
}

handlePasswordChange(event) {
    this.setState({password: event.target.value});
}

handleSubmit(event) {
    event.preventDefault();
    this.Auth.login(event, this.state.email, this.state.password);

    this.setState({
        redirect: true
    })
}


    render() {
        let isLoggedIn = this.Auth.loggedIn();

        if(isLoggedIn || this.state.redirect) {
            return(<Redirect to="/store" />);
        }

        return (
            <div className="containerLogIn"> 
                <form onSubmit={this.handleSubmit} className="jumbotron jumbotron-fluid m-0" id="login-form" noValidate>
                    <div className="container" id="login-form-content">
                        <h1 className="text-center">Sign in</h1>
                        <div className="row">
                            <input 
                                className="form-control col-12 mb-3" 
                                id="email-login" 
                                type="email" 
                                placeholder="Email" 
                                value={this.state.email} 
                                onChange={this.handleEmailChange} 
                                required/>
                            <input 
                                className="form-control col-12 mb-3" 
                                id="password-login" 
                                type="password" 
                                placeholder="Password" 
                                value={this.state.password} 
                                onChange={this.handlePasswordChange} 
                                required/>
                            <button onClick={this.handleSubmit} className="btn btn-success col-4 mb-3 mx-auto">Login</button>
                            <span className="col-12 text-white text-center">Don't have an account? <a href="/register">Register</a></span>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;