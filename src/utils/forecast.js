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

            callback(undefined, {
                message: `${description}. It currently ${temperature} degrees out. Its feels like ${feelslike} degrees out.  The sky is currently ${visibility} visibility.  `
            })
        }
    })
}


module.exports = forecast