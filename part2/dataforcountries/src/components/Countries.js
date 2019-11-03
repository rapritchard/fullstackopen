import React from 'react';
import Country from './Country';

const Countries = ({ countries, searchCountry, setSearchCountry }) => {

  const displayCountries = () => {
    if(countries.length === 0) {
      return (
        <div>No results</div>
      );
    }
    else if(countries.length === 1) {
      return <Country country={countries[0]} />
    }
    else if(countries.length > 10) {
      return (
      <div>Too many matches, specify another filter</div>
      );
    }
    
    return countries.map(country => 
    <div key={country.numericCode}>
      {country.name}
      <button value={country.name} onClick={handleShowCountry}>Show</button>
    </div>
    );
  }

  const handleShowCountry = (event) => {
    setSearchCountry(event.target.value);
  }

  return (
    <div>
      {displayCountries()}
    </div>
  )
};

export default Countries;
