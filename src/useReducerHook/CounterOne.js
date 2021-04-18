import React, {useReducer} from 'react';

const initialState = 0;
const reducer = (currentState, action) => {
    // return newState ; here newState is depending upon the action
    switch(action) {
        case 'increment':
            return currentState + 1;
        case 'decrement':
            return currentState - 1;
        case 'reset':
            return initialState;
        default:
            return currentState;
    }

    // so every time we return a newState depending upon the action
};

function CounterOne() {

    const [newStateValue, dispatch] = useReducer(reducer, initialState);
    console.log('NewState : ', newStateValue);
    console.log('Dispatch method : ', dispatch);

    // dispatch : dispatch method is capable of expecting an action to execute the code specified in the render function

    return (
        <div>
            <h2>Count : {newStateValue}</h2> 
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne;
