 const request = require('request')

 const forecast = (latitude, longitude, callback) => {
    const url =`http://api.weatherstack.com/current?access_key=9ed790677ce7b3f1a4a83b9b13ae97e0&query=${latitude},${longitude}`
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            const temperature = body.current.temperature
            const feelslike = body.current.feelslike
            const description = body.current.weather_descriptions[0]
            const hunidity =  body.current.humidity

            callback(undefined, {
                description: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                humidity: body.current.humidity,
            });
        }
    });
}


module.exports = forecast;