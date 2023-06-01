export const getWeatherData = async (cityName) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY
    try {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`,
            { 
                method: "GET",
                headers: {}
            })
        if (response.ok) {
            console.log('Location data retrieved.')
            const data = await response.json();
            if (!data) {
                return {}
            } else {
                console.log(data)
                return { 
                    place: data.name,
                    temperature: data.main.temp,
                    weather: data.weather.main,
                    sky: data.weather.description,
                    feelsLike: data.main.feels_like,
                    humidity: data.main.humidity,
                    pressure: data.main.pressure,
                    windSpeed: data.wind.speed,
                    cod: data.cod,
                    message: data.message
                };
            }
        } else {
            console.log('Failed to retrieve location data.')
        }
    }
    catch (error) {
        console.error(error);   
    }
}
