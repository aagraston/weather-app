const RequestProducer = () => {
  // variables constants
  const requestWeatherStringStart =
    'http://api.openweathermap.org/data/2.5/weather?'
  const unitString = '&units=metric'
  const apiString = '&appid=6bff825e1aebc4067e19ba07df5d07d3'
  // variables city start
  let cityCoordString = 'q='

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

  function buildSearchString() {
    return requestWeatherStringStart + cityCoordString + unitString + apiString
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

  return { updateCityString, getCityString, getQueryMain }
}

export default RequestProducer
