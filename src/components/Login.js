import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import AuthService from './AuthService';
import '../styles/Login.css';
import Image from '../images/login_bg.jpg';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            redirect: false 
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.Auth = new AuthService;
    }


    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.Auth.login(event, this.state.username, this.state.password).then(res => {
            if (res.message === 'ok') {
                this.setState({
                    redirect: true
                })
            }
        })
    }


    render() {
        let isLoggedIn = this.Auth.loggedIn();

        if(isLoggedIn || this.state.redirect) {
            return(<Redirect to="/store" />);
        }

        return (
            <div style={{backgroundImage: `url(${Image})`}} className="containerLogIn"> 
                <form style={{backgroundColor: '#990000'}} onSubmit={this.handleSubmit} className="jumbotron jumbotron-fluid m-0" id="login-form" noValidate>
                    <div className="container" id="login-form-content">
                        <h1 className="text-center">Sign in</h1>
                        <div className="row">
                            <input 
                                className="form-control col-12 mb-3" 
                                id="username-login" 
                                type="text" 
                                placeholder="Username" 
                                value={this.state.username} 
                                onChange={this.handleUsernameChange} 
                                required/>
                            <input 
                                className="form-control col-12 mb-3" 
                                id="password-login" 
                                type="password" 
                                placeholder="Password" 
                                value={this.state.password} 
                                onChange={this.handlePasswordChange} 
                                required/>
                            <button style={{backgroundColor: '#000ecf'}} className="btn btn-success col-4 mb-3 mx-auto">Login</button>
                            <span className="col-12 text-white text-center">Don't have an account? <a href="/register">Register</a></span>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;