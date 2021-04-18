import React, {useReducer} from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};

const reducer = (currentState, action) => {
    // return newState ; here newState is depending upon the action
    switch(action.type) {
        case 'increment':
            return {...currentState, firstCounter : currentState.firstCounter + action.value};
        case 'decrement':
            return {...currentState, firstCounter : currentState.firstCounter - action.value};
        case 'increment2':
            return {...currentState, secondCounter : currentState.secondCounter + action.value};
        case 'decrement2':
            return {...currentState, secondCounter : currentState.secondCounter - action.value};
        case 'reset':
            return initialState;
        default:
            return currentState;
    }

    // so every time we return a newState depending upon the action
};

function CounterTwo() {

    const [newStateValue, dispatch] = useReducer(reducer, initialState);

    console.log('NewState : ', newStateValue);
    console.log('Dispatch method : ', dispatch);

    // dispatch : dispatch method is capable of expecting an action to execute the code specified in the render function

    return (
        <div>
            <h2>FirstCounter : {newStateValue.firstCounter}</h2>
            <h2>SecondCounter : {newStateValue.secondCounter}</h2> 
            <div>
                For First Counter
            </div>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment:1</button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement:1</button>
            {/* if we use useReducer with object value then it will be easy to increment or decrement with any value*/ }
            <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment:5</button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement:5</button>
            <br /> <br />

            <div>
                For Second Counter
            </div>
            <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment:1</button>
            <button onClick={() => dispatch({type: 'decrement2', value: 1})}>Decrement:1</button>
            {/* if we use useReducer with object value then it will be easy to increment or decrement with any value*/ }
            <button onClick={() => dispatch({type: 'increment2', value: 5})}>Increment:5</button>
            <button onClick={() => dispatch({type: 'decrement2', value: 5})}>Decrement:5</button>

            <br /> <br />

            <div>
                For Reset All Counter
            </div>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>

        </div>
    )
}

export default CounterTwo;
