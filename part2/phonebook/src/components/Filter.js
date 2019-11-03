import React from 'react';

const Filter = ({ showFilter, setShowFilter }) => {
  const handleFilterChange = (event) => {
    setShowFilter(event.target.value)
  };

  return (
    <div>
      Filter shown with <input value={showFilter} onChange={handleFilterChange}/>
    </div>
  )
}

export default Filter;
