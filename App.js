import React, { Component } from 'react'
import Nav from "./Nav"
import About from "./About"
import Shop from "./Shop"
import Home from "./Home"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Nav/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/shop" component={Shop}/>
        </Switch>
      </div>
      </Router>
    )
  }
}

export default App
