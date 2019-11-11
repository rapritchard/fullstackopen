import React from 'react';
import personService from '../services/persons';

const PersonForm = ({ 
  newName, 
  setNewName, 
  newNumber, 
  setNewNumber, 
  persons, 
  setPersons,
  setnotificationMessage
  }) => {

  const updatePerson = person => {
    const id = person.id;
    const changedPerson = { ...person, number: newNumber }
    console.log(person);
    personService
      .update(id, changedPerson).then(returnedPerson => {
        setnotificationMessage({messageText: `Updated ${returnedPerson.name}'s number`, error: false})
        setTimeout(() => {
          setnotificationMessage({messageText: null})
        }, 3000)
        setPersons(persons.map(p => p.id !== id ? p : returnedPerson));
      }).catch(error => {
        setnotificationMessage({messageText: `The record for ${person.name} no longer exists on the server.`, error: true})
        setTimeout(() => {
          setnotificationMessage({messageText: null})
        }, 3000)
        setPersons(persons.filter(p => p.id !== id));
      });
  };

  const addPerson = (event) => {
    event.preventDefault();
    const matchedPerson = persons.filter(person => 
      person.name.toLowerCase() === newName.toLowerCase().trim());

    if(matchedPerson.length){
      if(window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)){
        updatePerson(matchedPerson[0]);
        return true;
      }
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }

    personService
      .create(newPerson).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        
        setNewName('');
        setNewNumber('');

        setnotificationMessage({messageText: `Added ${returnedPerson.name}`, error: false})
        setTimeout(() => {
          setnotificationMessage({messageText: null})
        }, 3000)
      })
      .catch(error => {
        setnotificationMessage({ messageText: error.response.data.error, error: true})
        setTimeout(() => {
          setnotificationMessage({messageText: null})
        }, 3000)
      })
  };

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
