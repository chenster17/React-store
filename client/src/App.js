
import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import {useDispatch} from "react-redux";
import {currentLocation} from "./actions/filter";


import Home from './components/home.components';
import Shop from './components/shop.components'


function App() {

    const dispatch = useDispatch();
    var extension = document.URL.split('/');
    if (["computer","mouse", "keyboard", "speaker", "headphone", "webcam"].includes(extension[extension.length - 1]) && extension[extension.length - 2] === "Shop") {
        dispatch(currentLocation(extension[extension.length - 1]))
    }
    else{
        dispatch(currentLocation("default"))
    }


  return (
      <Router>
        <Route exact path='/' component={Home}/>
        <Route path="/Shop" component={Shop}/>
      </Router>
  );
}

export default App;