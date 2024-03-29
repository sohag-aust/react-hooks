import React, {useState} from 'react';

function UseStateArray() {

    const [items, setItems] = useState([]);

    function addItem() {
        setItems([...items, {
                id : items.length,
                value : Math.floor(Math.random() * 10) + 1 
            }
        ])
    }

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}> {item.value} </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UseStateArray;
