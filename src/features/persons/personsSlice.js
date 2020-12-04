import { createSlice } from '@reduxjs/toolkit';

export const personsSlice = createSlice({
    name: 'persons',
    initialState: {
        persons: [{id: 1, name: 'Juan', age: '34'}]
    },
    reducers: {
        addPerson: (state, action) => {
            const newPerson = {
                id: Math.random(),
                name: action.payload.name,
                age: action.payload.age
            };
            state.persons.push(newPerson);
        },
        removePerson: (state, action) => {
            state.persons = state.persons.filter(p => p.id !== action.payload.id)
        }
    },
});

export const { addPerson, removePerson } = personsSlice.actions;

export const selectPersons = state => state.persons.persons;

export default personsSlice.reducer;