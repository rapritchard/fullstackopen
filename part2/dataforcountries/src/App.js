import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Countries from './components/Countries';

const App = () => {
  const [ countries, setCountries ] = useState([]);
  const [ searchCountry, setSearchCountry ] = useState('');

  const hook = () => {
    axios
    .get(`https://restcountries.eu/rest/v2/name/${searchCountry}`)
    .then(response => {
      setCountries(response.data);
    })
  };

  useEffect(hook, [searchCountry]);

  const handleCountryChange = (event) => {
    setSearchCountry(event.target.value);
  }

  

  return (
    <div>
     find countries <input value={searchCountry} onChange={handleCountryChange} />
     <Countries 
      countries={countries} 
      searchCountry={searchCountry} 
      setSearchCountry={setSearchCountry} 
     />
    </div>
  )
};

export default App;
