import React, { useEffect, useState }  from 'react';
import {getWeatherData} from '../../getWeatherData.js';

export const WeatherPanel = (place) => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (place) {
        const newWeatherData = await getWeatherData(place);
        setWeatherData(`Current temperature for ${newWeatherData.place} is ${newWeatherData.temperature}˚C`);
      }
    };
    fetchData() 
      .catch(console.error);  
  }, []);

  return (
  <div>
    <h2>{ weatherData }</h2>
  </div>
  )
}
