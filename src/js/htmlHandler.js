const HtmlProducer = () => {
  // grab elements from document
  const displayCity = document.querySelector('.weather-details-city')
  const displayTemperature = document.querySelector(
    '.weather-details-temperature'
  )
  const displayCondition = document.querySelector('.weather-details-condition')

  // input elements
  const searchInput = document.querySelector('#input-search')

  const getSearchText = () => searchInput.value

  function produceMain() {}

  function produce5Day() {}

  return { produceMain, produce5Day, getSearchText }
}

export default HtmlProducer
