import React, { Component } from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import {connect} from 'react-redux';
import * as actions from './components/action/action';
//import First from './components/first';
import "./App.css";
import Landing from './components/Layout/Landing';

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
 render(){
  return (
    <Router>
      <div className="App container">
        <Header />
        <Route path='/' exact component={Landing}></Route>
        <Route exact path='/serveys'>
          <h1>ddd</h1>
        </Route>
      </div>
    </Router>
  );
 }
}

export default connect(null,actions)(App);
