import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Persons } from './features/persons/Persons';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <Counter />
        <Persons />
      </header>
    </div>
  );
}

export default App;
