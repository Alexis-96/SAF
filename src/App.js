import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from './components/NavBar';
import PrivateRoute from './utils/PrivateRouter';
import { Detalle } from './views/Detalle';
import { Home } from './views/Home';

function App() {
  return (
    <Router>
     <Navbar/>
      <Switch>
        <PrivateRoute exact path="/home" component = {Home}/>
        <PrivateRoute path="/detalle/:reqId" component = {Detalle}/>
        <Redirect to="/home"/>
      </Switch>
  </Router>
  );
}

export default App;
