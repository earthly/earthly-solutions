const quotes = require('./quotes')

test('randomQuotes gives a valid quote', () => {
  expect(quotes.quotes.includes(quotes.randomQuote())).toBe(true) 
})
