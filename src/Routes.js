import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

class Routes extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/"  component= {Home} />
                    <Route exact path="/login"  component= {Login} />
                </Switch>
            </main>
        );
    };
};


export default Routes;