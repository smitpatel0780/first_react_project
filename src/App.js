
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"






export default class App extends Component {
  apikey="3da002e4ad244cada9629bacab7ebb2b"
  image="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
  render() {
    return (
      <Router>
       
        <Navbar/>
        <Switch>
          <Route exact path="/"><News  key="generals"  apikey={this.apikey}  pageSize={6} country="in" category="general"/></Route>
          <Route exact path="/business"><News key="business" apikey={this.apikey} pageSize={6} country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News key="entertainment" apikey={this.apikey} pageSize={6} country="in" category="entertainment"/></Route>
          <Route exact path="/general"><News key="general" apikey={this.apikey} pageSize={6} country="in" category="general"/></Route>
          <Route exact path="/health"><News key="health"  apikey={this.apikey}pageSize={6} country="in" category="health"/></Route>
          <Route exact path="/science"><News key="science" apikey={this.apikey} pageSize={6} country="in" category="science"/></Route>
          <Route exact path="/sports"><News key="sports" apikey={this.apikey} pageSize={6} country="in" category="sports"/></Route>
          <Route exact path="/technology"><News key="technology" apikey={this.apikey} pageSize={6} country="in" category="technology"/></Route>
        </Switch>
      </Router>
    )
  }
}
