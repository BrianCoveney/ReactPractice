import React from 'react';
import { connect } from 'react-redux';

class ReduxCounter extends React.Component {


    increment = () => {
        // TODO
    };

    decrement = () => {
        // TODO
    };

    render() {
        return (
            <div className='comp-container'>
                <h2>Redux Counter</h2>
                <div>
                    <button onClick={ this.decrement }>&ndash;</button>
                    <span className='count'>{ this.props.count }</span>
                    <button onClick={ this.increment }>+</button>
                </div>
            </div>
        );
    }
}

// This functions takes the entire Redux state, and is expected to return and object
// where the keys are 'prop names' and the value are 'prop values'.
const mapStateToProps = (state) => ({
    count: state.count
});

export default connect(mapStateToProps)(ReduxCounter);