const HtmlProducer = () => {
  // grab elements from document
  const displayCity = document.querySelector('.weather-details-city')
  const displayTemperature = document.querySelector(
    '.weather-details-temperature'
  )
  const displayCondition = document.querySelector('.weather-details-condition')

  // five-day contaner
  const display5DayDiv = document.querySelector('.weather-five-day-div')

  // input elements
  const searchInput = document.querySelector('#input-search')

  const getSearchText = () => searchInput.value

  const produceMain = (dataObj) => {
    displayCondition.innerHTML = `${dataObj.weather[0].main}`
    displayCity.innerHTML = `${dataObj.name}, ${dataObj.sys.country}`
    displayTemperature.innerHTML = `${dataObj.main.temp}\u00B0C`
  }

  const produce5Day = (dataObj) => {
    const fiveDayDivArray = get5DayDivArray(dataObj)
    display5DayDiv.innerHTML = ''
    fiveDayDivArray.forEach((element) => {
      display5DayDiv.appendChild(element)
    })
  }

  function get5DayDivArray(dataObj) {
    const retArray = []

    for (let index = 4; index < dataObj.list.length; index += 8) {
      console.log(dataObj)

      const dayDiv = document.createElement('div')
      dayDiv.classList.add('weather-day')

      const dayLabel = document.createElement('div')
      dayLabel.classList.add('weather-day-title')

      const dayDelineator = document.createElement('div')
      dayDelineator.classList.add('weather-day-seperator')
      dayDelineator.innerHTML = `<hr>`

      const dayTemp = document.createElement('div')
      dayTemp.classList.add('weather-day-temp')

      let dayOfWeek = new Date(dataObj.list[index].dt_txt)
      // eslint-disable-next-line prefer-destructuring
      dayOfWeek = dayOfWeek.toString().split(' ')[0]

      dayLabel.innerHTML = dayOfWeek
      dayTemp.innerHTML = `${dataObj.list[index].main.temp}\u00B0C`

      // append elements to weather-day div
      dayDiv.appendChild(dayLabel)
      dayDiv.appendChild(dayDelineator)
      dayDiv.appendChild(dayTemp)

      retArray.push(dayDiv)
    }
    return retArray
  }

  return { produceMain, produce5Day, getSearchText }
}

export default HtmlProducer
