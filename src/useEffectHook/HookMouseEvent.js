import React, {useState, useEffect} from 'react';

function HookMouseEvent() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    function logMousePosition(event) {
        console.log('Mouse Event called');
        setX(event.clientX);
        setY(event.clientY);
    }

    useEffect(()=>{
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition)

        // if we don't put componentWillUnMount cycle here, then it will give warnings and indicates memory-leak
        return (()=>{
            console.log('Mouse Movement cleared in componentWillUnmount cycle in Hook');
            window.removeEventListener('mousemove', logMousePosition);
        })
    }, [])

    return (
        <div>
            Hooks : X = {x} && Y = {y}
        </div>
    )
}

export default HookMouseEvent;
