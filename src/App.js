import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About_Me from "./Pages/About_Me"
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import Portfolio from "./Pages/Portfolio"


function App() {
  return (

    <Router >

      <Route extact path="/" component={Home}/>
      <Route extact path="/About_Me" component={About_Me}/>
      <Route extact path="/Portfolio" component={Portfolio}/>

          
    </Router>
  

  );
}

export default App;