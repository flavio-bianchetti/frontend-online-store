import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import ConfirmOrder from './pages/ConfirmOrder';
import Footer from './component/Footer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/shoppingcart" component={ ShoppingCart } />
        <Route
          exact
          path="/productdetails/:id/:categoryId"
          render={ (props) => <ProductDetails { ...props } /> }
        />
        <Route path="/confirmorder" component={ ConfirmOrder } />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
