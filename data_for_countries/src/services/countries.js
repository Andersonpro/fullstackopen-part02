import axios from "axios"

const baseUrl = 'https://restcountries.com/v3.1/all'
const getCountries = async () => {
  const response = await axios.get(baseUrl);
  return response;
}

export default {getCountries};