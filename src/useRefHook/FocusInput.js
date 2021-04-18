import React, {useRef, useEffect} from 'react';

function FocusInput() {

    const inputRef = useRef(null);

    useEffect( () => {
        // focus the input element
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <input type='text' placeholder='Enter your name' ref={inputRef}/>
        </div>
    )
}

export default FocusInput;
