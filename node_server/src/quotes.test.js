const quotes = require('./quotes')

test('randomQuotes gives a valid quote', async () => {
  
  const data =quotes.getQuotes()
  console.log(data)

  expect(quotes.quotes.includes(quotes.randomQuote())).toBe(true) 
})
