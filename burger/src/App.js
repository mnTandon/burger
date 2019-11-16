import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Person name="Mohit" age="26">My Hobbies: Gaming</Person>
        <Person name="Suraj" age="28" />
        <Person name="Surbhi" age="26" />
      </div>
    );
  }
}

export default App;
