import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from './components/NavBar';

import { Detalle } from './views/Detalle';
import { Home } from './views/Home';

function App() {
  return (
    <Router>
     <Navbar/>
      <Switch>
        <Route exact path="/home" component = {Home}/>
        <Route path="/detalle/:reqId" component = {Detalle}/>
        <Redirect to="/home"/>
      </Switch>
  </Router>
  );
}

export default App;
