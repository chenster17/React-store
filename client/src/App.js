
import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';


import Home from './components/home.components';
import Shop from './components/shop.components'


function App() {
  return (
      <Router>
        <Route exact path='/' component={Home}/>
        <Route path="/Shop" component={Shop}/>
      </Router>
  );
}

export default App;