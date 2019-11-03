import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Country = ({ country }) => {
  const API_KEY = `${process.env.REACT_APP_WEATHERSTACK_API_KEY}`;
  const [ weatherData, setWeatherData ] = useState([]);
  const showLanguages = () => country.languages.map(language => <li key={language.iso639_2}>{language.name}</li>)

  const hook = () => {
    axios
    .get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${country.capital}`)
    .then(response => {
      setWeatherData(response.data.current);
    })
  };
  console.log(weatherData)

  useEffect(hook, [country]);

  return (
    <div key={country.numericCode}>
      <h1>{country.name}</h1>
      <div>Capital {country.capital}</div>
      <div>Population {country.population}</div>
      <h3>Languages</h3>
      <ul>{showLanguages()}</ul>
      <img src={country.flag} width="125" height="125" />
      <h3>Weather in {country.capital}</h3>
      <p><strong>temperature:</strong> {weatherData.temperature} Celsius</p>
      <img src={weatherData.weather_icons} />
      <p><strong>wind:</strong> {weatherData.wind_speed} kph direction {weatherData.wind_dir}</p>
    </div>
  );
}

export default Country;
