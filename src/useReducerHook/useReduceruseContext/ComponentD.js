import React, {useContext} from 'react';
import { GlobalContext } from '../../App';

function ComponentD() {
    const globalContext = useContext(GlobalContext);
    const {newState, dispatch} = globalContext;

    return (
        <div>
            <h2>ComponentD - Count : {newState}</h2> 
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentD;
