export const getWeatherData = async (cityName) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`,
            { 
                method: "GET",
                headers: {}
            });
            const data = await response.json();
            console.log(data)
            return {place: data.name,
            temperature: data.main.temp};    
        }
    catch (error) {
        console.error(error);   
        return;
    }
}
