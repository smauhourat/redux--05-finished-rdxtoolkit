import React, { useState } from 'react';
import Person from '../../components/Person/Person';
import AddPerson from '../../components/AddPerson/AddPerson';
import { useSelector, useDispatch } from 'react-redux';
import { addPerson, removePerson, selectPersons } from './personsSlice';

export function Persons() {
    const persons = useSelector(selectPersons);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    return (
        <div>
            <AddPerson 
                name={name}
                changeName={e => setName(e.target.value)}
                age={age}
                changeAge={e => setAge(e.target.value)}
                clicked={() =>
                    dispatch(addPerson({name: name, age: age}))}
            />
            <p>Cantidad Total: {persons.length}</p>
            {persons.map(person => (
                <Person 
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    clicked={() => 
                        dispatch(removePerson({id: person.id}))}
                />
            ))}            
        </div>
    )
}