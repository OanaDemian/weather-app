import React  from 'react';
export const WeatherPanel = ({weatherData}) => {
  return (
  <div>
    <h2>Location: {weatherData.place}</h2>
    <p>Current temperature: {weatherData.temperature}</p>
  </div>
  )
}
