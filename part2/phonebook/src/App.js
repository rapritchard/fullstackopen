import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showFilter, setShowFilter] = useState("");
  const [notificationMessage, setnotificationMessage] = useState({
    messageText: null,
    error: false
  });

  useEffect(() => {
    personService.getAll().then(initalPersons => {
      setPersons(initalPersons);
    });
  }, []);

  const displayPersons = () => {
    const filteredPersons = persons.filter(person =>
      person.name.toLowerCase().includes(showFilter.toLowerCase())
    );

    return filteredPersons.map(person => (
      <Persons
        key={person.id}
        name={person.name}
        number={person.number}
        toggleDelete={() => toggleDeleteOf(person.id)}
      />
    ));
  };

  const toggleDeleteOf = id => {
    const person = persons.find(p => p.id === id);
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deleteRecord(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id));
        })
        .catch(error => {
          setnotificationMessage({
            messageText: `The number for ${person.name} was already deleted from the server`,
            error: true
          });
          setTimeout(() => {
            setnotificationMessage({ messageText: null });
          }, 3000);
          setPersons(persons.filter(p => p.id !== id));
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      <Filter showFilter={showFilter} setShowFilter={setShowFilter} />
      <h2>Add New</h2>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
        setnotificationMessage={setnotificationMessage}
      />
      <h2>Numbers</h2>
      {displayPersons()}
    </div>
  );
};

export default App;
