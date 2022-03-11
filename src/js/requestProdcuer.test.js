import RequestProducer from './requestProducer'

const requestProducer = RequestProducer()

test('changes to city string', () => {
  requestProducer.updateCityString('kelowna')
  expect(requestProducer.getCityString().toBe('q=kelowna'))
})
