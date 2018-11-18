import React from 'react';

//  We use an ES6 class to define a component
class StatefulCounter extends React.Component {

    // The most important difference between state and props is that props are 
    // passed from a parent component, but state is managed by the component itself.
    // A component cannot change its props, but it can change its state. 
    // To do so, it must call this.setState(). Only components defined as classes 
    // can have state.
    state = { count: 0 };

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    render() {
        return (
            <div className='comp-container'>
                <h2>Stateful Counter</h2>
                <div>
                    <button onClick={ this.decrement }>&ndash;</button>
                    <span className='count'>{ this.state.count }</span>
                    <button onClick={ this.increment }>+</button>
                </div>
            </div>
        );
    }
}

export default StatefulCounter;