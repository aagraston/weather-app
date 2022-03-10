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
  // update the city we're looking for
  requestProducer.updateCityString(htmlHandler.getSearchText())

  // get the main display information
  const resObj = requestProducer.getQueryMain()
  resObj.then((result) => {
    // set the display with updated info
    htmlHandler.produceMain(result)
  })

  // get the forecast display information
  const forecastObj = requestProducer.getQueryForecast()
  forecastObj.then((result) => {
    htmlHandler.produce5Day(result)
  })
}
