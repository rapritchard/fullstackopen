import React from 'react';

const Persons = ({ persons,showFilter }) => {
  const displayPersons = () => {
    const filteredPersons = persons.filter(person => 
      person.name.toLowerCase().includes(showFilter.toLowerCase()));

    return filteredPersons.map(person => 
    <div key={person.name}> {person.name} {person.number} </div>)
  };

  return (
    <div>
      {displayPersons()}
    </div>
  )
}

export default Persons;
