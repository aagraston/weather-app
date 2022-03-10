import '../scss/app.scss'
import HtmlHandler from './htmlHandler'
import RequestProducer from './requestProducer'

// instantiate request produce and html handler
const htmlHandler = HtmlHandler()
const requestProducer = RequestProducer()

// get submit button
const submitInput = document.querySelector('#input-submit')

// addEventListener to button to search a locale
submitInput.addEventListener('click', submitSearch)

// functions

function submitSearch(e) {
  requestProducer.updateCityString(htmlHandler.getSearchText())
  const resObj = requestProducer.getQueryMain()
  resObj.then((result) => {})
  // const searchString = buildSearchString()
  // const returnObj = queryApi(searchString)
  // returnObj.then((result) => {
  //   updateMainDisplay(result)
  // })
}

// function updateMainDisplay(dataObj) {
//   console.log(dataObj)
//   displayCondition.innerHTML = `${dataObj.weather[0].main}`
//   displayCity.innerHTML = `${dataObj.name}, ${dataObj.sys.country}`
//   displayTemperature.innerHTML = `${dataObj.main.temp}\u00B0C`
// }
