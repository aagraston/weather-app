import RequestProducer from './requestProducer'

const requestProducer = RequestProducer()

test('check for city update', () => {
  requestProducer.updateCityString('kelowna')
  expect(requestProducer.getCityString()).toBe('q=kelowna')
})
