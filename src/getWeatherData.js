const apiKey = require("./apiKey");

  export const getWeatherData = async (cityName) => {
    try {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`,{ 
                method: "GET",
                headers: {
                }
            })
            const data = await response.json();
            if (!data) {
                return {}
            } else {
                console.log(data)
                return data;
            }
        }
        catch (error) {
            console.error(error);
        }
 }
