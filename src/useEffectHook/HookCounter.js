import React, {useEffect, useState} from 'react';

function HookCounter() {

    const [count, setCount] = useState(0);

    function increaseCount() {
        setCount(count + 1)
    }

    useEffect(()=>{
        let mountingState = `you clicked ${count} times (mounting)`;
        let updatingState = `you clicked ${count} times (updating)`;

        console.log('Count in useEffect Hook : ', count);

        document.title = count ? updatingState : mountingState;

        // now we want to implement componentWillUnmount in useEffect hook
        return (()=>{
            console.log('componentWillUnmount in useEffect hook');
        })

    }, [count]) // if we don't declare dependency array then it will run after every render whether the state change or not, so that will be a great problem of efficiency
    // if we want to use the useEffect as like componentDidMount then we should pass empty array as a condition param
    return (
        <div>
            <button onClick={increaseCount}>INC. Count</button>
        </div>
    )
}

export default HookCounter;
