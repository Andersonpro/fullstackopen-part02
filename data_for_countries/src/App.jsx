
import { useEffect, useState } from 'react';
import countriesService from './services/countries'
import { Country } from './components/Country';

function App() {

  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');

  useEffect(() => {
    countriesService.getCountries().then(response => {
      setCountries(response.data);
      console.log(response.data);
    })
  }, []);

    const filteredCountries = countries.filter(country => {
      return country.name.common.toLowerCase().includes(searchCountry.toLowerCase()) && searchCountry !== '';
    });
  


  const handleInput = (event) => {
    setSearchCountry(event.target.value);
  }

  return (
    <>
      <input type="text" value={searchCountry} onChange={handleInput} />
      <Country filteredCountries={filteredCountries} />
    </> 
  )
}

export default App
