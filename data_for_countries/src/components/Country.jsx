/* eslint-disable react/prop-types */

import { useState } from "react";
import weatherService from '../services/weather'
export const Country = ({ filteredCountries }) => {


  let conteudo = null;
  const [showCountry, setShowCountry] = useState(null);

  if (filteredCountries.length > 10) {
    conteudo = <p>Too many maches, specify another filter</p>;
  } else if (filteredCountries.length > 1 && filteredCountries.length <= 10) {
    conteudo = filteredCountries.map(country =>
      <p key={country.name.common}>{country.name.common} <button onClick={() => {
        const aux = <>
          <h1>{country.name.common}</h1>
          <p>Capital: {country.capital}</p>
          <p>Area: {country.area}</p>
          <p><strong>Languages:</strong></p>
          {Object.values(country.languages).map((language) => <p key={language}>{language}</p>)}
          <img src={country.flags.png} alt={country.flags.alt} />
          <h1>Weather in {country.name.common}</h1>

          <p>temperature Celcius</p>
          <p></p>
        </>
        setShowCountry(aux);
      }
      }>show</button></p>);
  } else if (filteredCountries.length === 1) {
    const country = filteredCountries[0];

    weatherService.getWeather(country.capital, country.altSpellings[0])
      .then(weatherData => {
        const aux = (
          <>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <p><strong>Languages:</strong></p>
            {Object.values(country.languages).map((language) => <p key={language}>{language}</p>)}
            <img src={country.flags.png} alt={country.flags.alt} />
            <h1>Weather in {country.name.common}</h1>
            <p>Temperature in celcius: {weatherData.main.temp}</p>
          </>
        );
        setShowCountry(aux);
      })


  }

  return (
    <>
      {conteudo}
      {showCountry}
    </>
  );
}