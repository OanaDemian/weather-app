import React, { useEffect, useState }  from 'react';
import {getWeatherData} from '../../getWeatherData.js';

export const PlaceSearch = () => {
  const [weatherData, setWeatherData] = useState("");
  const [place, setPlace] = useState("");
 
  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  }

  const fetchTemperature = async () => {
    if (place) {
      const newWeatherData = await getWeatherData(place);
      setWeatherData(`Current temperature for ${place} is ${newWeatherData.main.temp}˚C`);
    }
  };

  useEffect(() => {
    fetchTemperature()
  }, []);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetchTemperature();
  }
  
  return (
  <div>
    <form onSubmit={handleSubmit}>
    <textarea placeholder = "What's the weather like in" type="text" id="newPost" rows="4" cols="50" 
      value={ place } onChange={handlePlaceChange} />
    <input role='submit-button' id='submit' type="submit" value="Search Place" />
    <h2>{ weatherData }</h2>
    </form>
  </div>
  )
}
