import '../scss/app.scss'

// variables constants
const requestWeatherStringStart =
  'http://api.openweathermap.org/data/2.5/weather?'
const unitString = '&units=metric'
const apiString = '&appid=6bff825e1aebc4067e19ba07df5d07d3'
// variables city start
let cityCoordString = 'q=kelowna'

// grab elements from document
const displayCity = document.querySelector('.weather-details-city')
const displayTemperature = document.querySelector(
  '.weather-details-temperature'
)
const displayCondition = document.querySelector('.weather-details-condition')

// addEventListener to button to search a locale

const newCoordString = buildCoordString()
const coordinateData = queryApi(newCoordString)

coordinateData.then((result) => {
  console.log(result)
})

// functions

function resetCityString() {
  cityCoordString = 'q='
}

function buildCoordString() {
  const newString =
    requestWeatherStringStart + cityCoordString + unitString + apiString
  return newString
}

async function queryApi(queryString) {
  try {
    const response = await fetch(queryString, { mode: 'cors' })
    const resData = await response.json()
    return resData
  } catch (err) {
    console.log(err)
    return err
  }
}
