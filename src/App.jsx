import { Route, Switch, Link } from "react-router-dom";
// import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import Cart from './Components/Cart';
import Error from './Components/Error';

function App() {
  return (
    <div className="App">
      <Navbar /><br />
      <Switch>
        <Route exact path="/">
          <Home />
          <Link to="/error">Error Out Here</Link>
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/products">
          <Products />
        </Route>

        <Route exact path="/cart">
          <Cart />
        </Route>

        <Route exact path="/error">
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
