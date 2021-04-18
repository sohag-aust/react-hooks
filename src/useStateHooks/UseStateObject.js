import React, {useState} from 'react';

function UseStateObject() {
    const [name, setName] = useState({firstName:'', lastName:''});

    function setFirstName(event) {
        //setName({firstName:event.target.value})
        // instead of previous one we should use following one
        setName({...name, firstName:event.target.value})
    }

    function setLastName(event) {
        //setName({lastName:event.target.value})
        // instead of previous one we should use following one
        setName({...name, lastName:event.target.value})
    }

    return (
        <div>
            <input type='text' placeholder='Enter First Name' onChange={setFirstName}/> <br/>
            <input type='text' placeholder='Enter Last Name' onChange={setLastName}/>
            <h1> First Name : {name.firstName} </h1>
            <h1> Last Name : {name.lastName} </h1>
        </div>
    );
}

export default UseStateObject;