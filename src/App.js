import React, { Component } from 'react';
import Header from './components/Header';
import Routes from './Routes';
import Footer from './components/Footer';
import Home from './components/Home';
import './App.css';

import Myaccount from './components/Myaccount';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
	        <Header />
        <Switch>
	        <Route exact path="/"  component= {Home} />
	        <Route exact path="/Myaccount"  component= {Myaccount} />
	        <Redirect to="/" />
      </Switch>

      </div>
    );
  }
}

export default App;
