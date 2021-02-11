import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Detalle } from './views/Detalle';
import { Home } from './views/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component = {Home}/>
        <Route path="/detalle" component = {Detalle}/>
        <Redirect to="/home"/>
      </Switch>
  </Router>
  );
}

export default App;
