import React from 'react';

const PersonForm = ({ newName, setNewName, newNumber, setNewNumber, persons, setPersons}) => {

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
    <form>
      <div>
        <div>Name: <input value={newName} onChange={handleNameChange} /></div>
        <div>Number: <input value={newNumber} onChange={handleNumberChange} /></div>
      </div>
      <div>
        <button type="submit" onClick={addPerson}>Add</button>
      </div>
    </form>
  )
}

export default PersonForm;
