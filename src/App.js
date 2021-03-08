import React from 'react';
import { BrouserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
      <Route extact path="/" component={Home}>
    </Router>
  );
}

export default App;