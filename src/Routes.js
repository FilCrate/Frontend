import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import StoreContainer from './components/StoreContainer';

class Routes extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/"  component= {Home} />
                    <Route exact path="/login"  component= {Login} />
                    <Route exact path="/store" component={StoreContainer}/>
                </Switch>
            </main>
        );
    };
};


export default Routes;