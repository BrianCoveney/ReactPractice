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


const mapStateToProps = (state) => ({
    count: state.count
});

export default connect(mapStateToProps)(ReduxCounter);