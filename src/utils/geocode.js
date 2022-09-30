const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=6faa78663b3e6bfafc39c109b31af6bb&query=/' + encodeURIComponent(address) + ' '
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.data.length === 0) {
            callback('Nothing to geocode,Try Again.', undefined)
        } else {
            callback(undefined, {
             latitude: body.data[0].latitude,
             longitude: body.data[0].longitude,
             location: body.data[0].label
            })
        }
    })
 }

 module.exports = geocode