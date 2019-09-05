/**
 * Router Project
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/contact';
import AllProducts from '../Components/AllProducts';
import ProductDetails from '../Components/productDetails';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path="/all-products" component={AllProducts} />
            <Route path="/single-product/:id" component={ProductDetails} />
        </Switch>

    );
}

export default Router;