import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import ProductPage from './components/ProductPage';

class Routes extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/"  component= {Home} />
                    <Route exact path="/login"  component= {Login} />
                    <Route path='/product/:number' component={ProductPage}/>
                </Switch>
            </main>
        );
    };
};


export default Routes;