/* import axios from "axios";

const getWeather = async (city, countryId) => {
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${countryId}&APPID=72572f5fbb10d1deb483e15458622fa7`);
  return response;
}

export default {getWeather}; */

import axios from "axios";

const getWeather = async (city, countryId) => {
  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${countryId}&APPID=72572f5fbb10d1deb483e15458622fa7`);
    return response.data;  // Retorna apenas os dados de clima, não a resposta completa.
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;  // Rejeita a Promise em caso de erro.
  }
}

export default { getWeather };
