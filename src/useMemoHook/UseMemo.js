import React, {useState, useMemo} from 'react';

function UseMemo() {

    const [one, setOne] = useState(0);
    const [two, setTwo] = useState(0);

    function increaseOne() {
        setOne(one+1)
    }

    function increaseTwo() {
        setTwo(two+1)
    }

    // const isEven = () => {
    //     let i = 0;
    //     while(i < 2000000000) i++;
    //     return one % 2 === 0;
    // }

    const isEven = useMemo(() => {
        let i = 0;
        while(i < 2000000000) i++;
        return one % 2 === 0;
    }, [one])

    return (
        <div>
            <div>
                <button onClick={increaseOne}>CountOne : {one}</button>
                {/*<span>{isEven() ? <h4>Even</h4> : <h4>Odd</h4>}</span> */}
                {/* instead of setting dependencies to both counter function we can set it to useMemo for the dependency for one*/ }

                <span>{isEven ? <h4>Even</h4> : <h4>Odd</h4>}</span>
            </div>
            <div>
                <button onClick={increaseTwo}>CountTwo : {two}</button>
            </div>
        </div>
    )
}

export default UseMemo;
