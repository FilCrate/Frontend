import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Crates from './components/Crates';
import Login from './components/Login';
import StoreContainer from './components/StoreContainer';
import ProductPage from './components/ProductPage';
import Search from './components/Search';

class Routes extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/"  component= {Home} />
                    <Route exact path="/crates" component = {Crates} />
                    <Route exact path="/login"  component= {Login} />
                    <Route exact path="/store" component={StoreContainer}/>
                    <Route path='/product/:number' component={ProductPage}/>
                    <Route exact path="/search" component={Search}/>
                </Switch>
            </main>
        );
    };
};


export default Routes;