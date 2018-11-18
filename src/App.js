import React, { Component } from 'react';
import  { createStore } from 'redux';
import  { Provider } from 'react-redux';
import './App.css';
import StatefulCounter from './StatefulCounter';
import StatelessFunctionalComponent from './StatelessFunctionalComponent';
import ReduxCounter from './ReduxCounter';


const initalState = {
  count: 0
};

// This functions tells redux what the initial state of the store is.
// It also is responsible for returning the new state.
// Here we are using ES6 defalut arguments to assign the state when it's undefined.
function reducer(state = initalState, action) {
  switch(action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
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
