import React, {useState} from 'react';
import HookMouseEvent from './HookMouseEvent';

function MouseContainer() {
    const [display, setDisplay] = useState(true);
    
    function changeDisplay() {
        setDisplay(!display);
    }

    return (
        <div>
            <button onClick={changeDisplay}>ChangeDisplay</button>
            {display && <HookMouseEvent/>}
        </div>
    )
}

export default MouseContainer;
