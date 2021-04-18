import React, {useContext} from 'react';
import { GlobalContext } from '../../App';

function ComponentF() {
    const globalContext = useContext(GlobalContext);
    const {newState, dispatch} = globalContext;

    return (
        <div>
            <h2>ComponentF - Count : {newState}</h2> 
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentF;
