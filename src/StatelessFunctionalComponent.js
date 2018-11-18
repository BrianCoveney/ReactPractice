import React from 'react';

// props are inputs to a React component. 
// They are data passed down from a parent component to a child component.
const StatelessFunctionalComponent = ((props) => {
    return (
        <div className='comp-container'>
            <h2>Name</h2>
            <div className='props-container'>
                <p>{ props.name }</p>
                <p>{ props.date }</p>
            </div>
        </div>
    )  
});

export default StatelessFunctionalComponent;