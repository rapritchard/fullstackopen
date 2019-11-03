import axios from 'axios';
import React, { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ showFilter, setShowFilter] = useState('');

  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        showFilter={showFilter} 
        setShowFilter={setShowFilter}
      />
      <h2>Add New</h2>
      <PersonForm 
        newName={newName} 
        setNewName={setNewName} 
        newNumber={newNumber} 
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
      />
      <h2>Numbers</h2>
      <Persons 
        persons={persons} 
        showFilter={showFilter} 
      />
    </div>
  )
};

export default App;
