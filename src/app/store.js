import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import personsReducer from '../features/persons/personsSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    persons: personsReducer,
  },
});
