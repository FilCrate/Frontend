import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';

class Routes extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path='/' component={Home} />
                </Switch>
            </main>
        );
    };
};


export default Routes;