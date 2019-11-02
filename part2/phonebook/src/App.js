import React, { useState } from 'react';

const Numbers = ({ name, number }) => (
  <div>
    {name} {number}
  </div>
);

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567'},
    { name: 'Ada Lovelace', number: '39-44-5323523'},
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ showSearched, setShowSearched ] = useState(persons);

  const displayNumbers = () => showSearched.map(person => <Numbers key={person.name} name={person.name} number={person.number} />);
  
  const addPerson = (event) => {
    event.preventDefault();
    const found = persons.filter(person => 
      person.name.toLowerCase() === newName.toLowerCase().trim());

    if(found.length){
      alert(`${newName} is already added to the phonebook`);
      return false;
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newPerson));
    setNewName('');
    setNewNumber('');
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        Filter shown with <input />
      </form>
      <h2>Add New</h2>
      <form>
        <div>
          <div>Name: <input value={newName} onChange={handleNameChange} /></div>
          <div>Number: <input value={newNumber} onChange={handleNumberChange} /></div>
        </div>
        <div>
          <button type="submit" onClick={addPerson}>Add</button>
        </div>
      </form>
      <div>Debug: {newName}</div>
      <h2>Numbers</h2>
      {displayNumbers()}
    </div>
  )
};

export default App;
