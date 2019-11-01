import React from 'react';

const Total = ({ parts }) => {

  const getTotal = () => parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises
    , 0
  );

  return (
    <div>
      <p><strong>Total of {getTotal()} exercises</strong></p> 
    </div>
  )
};

export default Total;
