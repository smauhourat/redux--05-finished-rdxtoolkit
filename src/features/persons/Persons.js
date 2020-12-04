import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPerson, removePerson, selectPersons } from './personsSlice';

export function Persons() {
    const persons = useSelector(selectPersons);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    return (
        <div>
            <input 
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Age"
                value={age}
                onChange={e => setAge(e.target.value)}
            />
            <button onClick={() =>
            dispatch(addPerson({name: name, age: age}))}>Add Person</button>
            <br />
            <p>Cantidad Total: {persons.length}</p>
            {persons.map(p => (
                <div onClick={() => 
                dispatch(removePerson({id: p.id}))}>
                    <hr></hr>
                    <h1>{p.name}</h1><p>{p.age}</p>
                    <hr></hr>
                </div>
            ))}
        </div>
    )
}