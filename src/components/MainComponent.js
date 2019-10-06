import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './HeaderComponent.js';
import Home from './HomeComponent.js';
import Cart from './CartComponent.js';
import Default from './DefaultComponent.js';
import Footer from './FooterComponent.js';

export default class Main extends Component {
    
    render() {      
        return (
            <div>
              <>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/cart" component={Cart} />
                    <Route component={Default} />
                </Switch>
              </>  
            </div>
        )
    }
}
