import React, { Component } from 'react';
import  { createStore } from 'redux';
import './App.css';
import StatefulCounter from './StatefulCounter';
import StatelessFunctionalComponent from './StatelessFunctionalComponent';
import ReduxCounter from './ReduxCounter';
import  { Provider } from 'react-redux';

function reducer() {
  return {
    count: 42
  };
}

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ReduxCounter />
        </Provider>
        
        <StatefulCounter />
        <StatelessFunctionalComponent name="Brian" date={ (new Date().getFullYear()) } />
      </div>
    );
  }
}

export default App;
