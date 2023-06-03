import React, { useState }  from 'react';
import { WeatherPanel } from '../weatherPanel/WeatherPanel.js';
import { getWeatherData } from '../../getWeatherData.js';

export const PlaceSearch = () => {
  const [place, setPlace] = useState("");
  const [weatherData, setWeatherData] = useState([]);

 
  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
        if (place) {
          const newWeatherData = await getWeatherData(place);
          setWeatherData([newWeatherData, ...weatherData]);
        }
  };

  return (
  <div>
    <form onSubmit={handleSubmit}>
    <textarea placeholder = "What's the weather like in" type="text" id="newPost" rows="4" cols="50" 
      value={ place } onChange={handlePlaceChange} />
    <input role='submit-button' id='submit' type="submit" value="Search Place" />
    {weatherData.map(weatherData => <WeatherPanel weatherData={weatherData}/>)}
    </form>
  </div>
  )
}
