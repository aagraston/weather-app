const RequestProducer = () => {
  // variables constants for primary weather
  const requestWeatherStringStart =
    'https://api.openweathermap.org/data/2.5/weather?'

  // variable constant for five day forecast
  const requestForecastStringStart =
    'https://api.openweathermap.org/data/2.5/forecast?'
  const requestNumDaysString = '&cnt=40'

  // variables shared
  let cityCoordString = 'q='
  const unitString = '&units=metric'
  const apiString = '&appid=6bff825e1aebc4067e19ba07df5d07d3'

  function resetCityString() {
    cityCoordString = 'q='
  }

  const updateCityString = (searchText) => {
    resetCityString()
    cityCoordString += searchText
  }

  const getQueryMain = () => {
    const queryString = buildSearchString()
    return queryApi(queryString)
  }

  const getQueryForecast = () => {
    const queryString = buildForecastString()
    return queryApi(queryString)
  }

  function buildSearchString() {
    return requestWeatherStringStart + cityCoordString + unitString + apiString
  }

  function buildForecastString() {
    return (
      requestForecastStringStart +
      cityCoordString +
      unitString +
      apiString +
      requestNumDaysString
    )
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

  const getCityString = () => cityCoordString

  return {
    updateCityString,
    getCityString,
    getQueryMain,
    getQueryForecast,
  }
}

export default RequestProducer
