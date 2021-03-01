import React,{useState} from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx'
import Login from './pages/Login/Login.jsx';
import Page404 from './pages/Page404/Page404.jsx';
import Category from './pages/Category/Category.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Terms from './pages/Terms/Terms.jsx';
import Favorite from './pages/Favorite/Favorite.jsx';
import Review from './pages/Review/Review.jsx';
import './utils/utility-classes.css';
// Importam si pagina de produs.
import Product from './pages/Product';
export default function App() {

  return(
        <div className="app">
          <Switch>
            <Route path="/login" component={Login}/>
            <Route exact path="/" component={Home}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/about" component={About}/>
            <Route path="/category/:categoryName" component={Category}/>
            {/* Instantiem ruta pentru pagina de produs */}
            <Route path="/product/:productId" component={Product}/>
            <Route path="/terms-and-conditions"  component={Terms}/>
            <Route path="/favorite" component={Favorite}/>
            <Route path="*" component={Page404}/>
          </Switch>
        </div>
  );
}

