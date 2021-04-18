import React, {useState} from 'react';

function Counting() {

    const [count, setCount] = useState(0);

    function increaseCountBy1() {
        //setCount(count + 1);
        // we can use the previous state for increment or decrement count
        setCount(previousStateCount => previousStateCount + 1);
    }

    function decreaseCountBy1() {
        setCount(previousStateCount => previousStateCount - 1);
    }

    function increaseCountBy5() {
        for(var i=1;i<=5;i++) {
            setCount(previousStateCount => previousStateCount + 1);
        }
    }

    return(
        <div>
            <h3> Count : {count}</h3>
            <button onClick={increaseCountBy1}> Increase 1 </button>
            <button onClick={decreaseCountBy1}> Decrease 1 </button>
            <button onClick={increaseCountBy5}> Increase 5 </button>
        </div>
    );

}

export default Counting;