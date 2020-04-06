import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { setupMaster } from 'cluster';

class App extends Component{
  sum(a:number, b:number){
    return a+b;
  }
  render(){
    return (
      <div className="App">
        <h1>hello</h1>
      </div>
    );
  }
}

export default App;
