import '../scss/app.scss'
import HtmlProducer from './htmlProducer'
import RequestProducer from './requestProducer'

// instantiate producers

// grab elements from document
const displayCity = document.querySelector('.weather-details-city')
const displayTemperature = document.querySelector(
  '.weather-details-temperature'
)
const displayCondition = document.querySelector('.weather-details-condition')

// input elements
const searchInput = document.querySelector('#input-search')
const submitInput = document.querySelector('#input-submit')

// addEventListener to button to search a locale
submitInput.addEventListener('click', submitSearch)

// functions

function submitSearch(e) {
  updateCityString()
  const searchString = buildSearchString()
  const returnObj = queryApi(searchString)
  returnObj.then((result) => {
    updateMainDisplay(result)
  })
}

function updateMainDisplay(dataObj) {
  console.log(dataObj)
  displayCondition.innerHTML = `${dataObj.weather[0].main}`
  displayCity.innerHTML = `${dataObj.name}, ${dataObj.sys.country}`
  displayTemperature.innerHTML = `${dataObj.main.temp}\u00B0C`
}

function updateCityString() {
  resetCityString()
  cityCoordString += searchInput.value
}

function resetCityString() {
  cityCoordString = 'q='
}

function buildSearchString() {
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
