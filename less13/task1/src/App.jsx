import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contacts from "./Contacts";
import Products from "./Products";
import Home from "./Home";
import PageNotFound from "./PageNotFound";

// REACT APPROACH
// 0. make a layout
// 1. split on components
// 2. static version in react
// 3. declare state and props
// 4. write logic

const App = () => {
  return (
    <div className='page'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>
          <Route path='/contacts'>
            <Contacts />
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
