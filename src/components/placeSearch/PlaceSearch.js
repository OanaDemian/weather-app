import React, { useEffect, useState }  from 'react';
import { WeatherPanel } from '../weatherPanel/WeatherPanel.js';
import { getWeatherData } from '../../getWeatherData.js';

export const PlaceSearch = () => {
  const [place, setPlace] = useState("");
  const [error, setError] = useState(null);
 
  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (place) {
    //   const newPlace = await getWeatherData(place);
    //   if (!newPlace.ok) {
    //     setError(newPlace.message)
    //   };
    // } 
  }

  return (
  <div>
    <form onSubmit={handleSubmit}>
    <textarea placeholder = "What's the weather like in" type="text" id="newPost" rows="4" cols="50" 
      value={ place } onChange={handlePlaceChange} />
    <input role='submit-button' id='submit' type="submit" value="Search Place" />
    <WeatherPanel place = {place}/>
    </form>
    {/* {error && <div className="error">{error}</div>} */}
  </div>
  )
}
