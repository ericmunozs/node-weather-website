const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.geoapify.com/v1/geocode/search?apiKey=6efbd090c5004530b895b421c6d48cd6&text=' + encodeURIComponent(address) + '&limit=1'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error || !body.features.length) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const { lat: latitude, lon: longitude, formatted: location } = body.features[0].properties
            callback(undefined, { latitude, longitude, location })
        }
    })
}

module.exports = geocode