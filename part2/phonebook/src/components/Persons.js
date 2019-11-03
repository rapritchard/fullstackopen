import React from 'react';

const Persons = ({ name, number, toggleDelete }) => (
  <div>
    {name} {number} <button onClick={toggleDelete}>Delete</button>
  </div>
)

export default Persons;
