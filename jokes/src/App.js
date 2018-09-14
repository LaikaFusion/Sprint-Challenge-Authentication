import React, { Component } from 'react';
import './App.css';
import { Route,Switch } from "react-router-dom";
import Signup from './components/Signup';
import Signin from './components/Signin';
import Jokes from './components/Jokes';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
        <Route path="/jokes" render={(props) => <Jokes {...props}/>}/>

        <Route path="/login" render={(props) => <Signin {...props}/>}/>

        <Route path="/register" render={(props) => <Signup {...props}/>}/>

        <Route path="/" render={() => <div>You were looking for a different URL</div>}/>
        </Switch>
      </div>
    );
  } 
}

export default App;
