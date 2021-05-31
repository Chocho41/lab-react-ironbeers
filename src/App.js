import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'
import ListBeers from './Pages/ListBeers'
import NewBeers from './Pages/NewBeers'
import RandomBeer from './Pages/RandomBeer'
import SingleBeer from './Pages/SingleBeer'

import Header from './Components/Header'

import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      
      <Switch>
        <Route exact path="/" component={Home}>
          <Home />
        </Route>

        <Route exact path="/beers" component={ListBeers}>
          <ListBeers />
        </Route>
        <Route exact path="/random-beer">
          <RandomBeer />
        </Route>
        <Route
          exact
          path="/beers/:theBeerId"
          component={SingleBeer}
        />
        <Route exact path="/new-beer" component={NewBeers}>
            <NewBeers />
        </Route>
      </Switch>


    </div>
  );
}

export default App;
