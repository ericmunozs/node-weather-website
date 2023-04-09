const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=5c1484b3cf9fe5e7a3b408e3cdd5108c&units=metric'

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const { body: { weather, main } } = response
            callback(undefined,
                'Weather: ' + weather[0].description + '. It is currently ' + main.temp + ' degress.')
        }
    })
}

module.exports = forecast