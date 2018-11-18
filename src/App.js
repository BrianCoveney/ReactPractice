import React, { Component } from 'react';
import './App.css';
import StatefulCounter from './StatefulCounter';
import StatelessFunctionalComponent from './StatelessFunctionalComponent';

class App extends Component {
  render() {
    return (
      <div>
        <StatefulCounter />
        <StatelessFunctionalComponent name="Brian" date={ (new Date().getFullYear()) } />
      </div>
    );
  }
}

export default App;
