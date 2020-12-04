import React from 'react';

const addPerson = (props) => (
    <div>
            <input 
                type="text"
                placeholder="Name"
                value={props.name}
                onChange={props.changeName}
            />
            <input 
                type="text"
                placeholder="Age"
                value={props.age}
                onChange={props.changeAge}
            />
            <button onClick={props.clicked}>Add Person</button>        
    </div>
);

export default addPerson;