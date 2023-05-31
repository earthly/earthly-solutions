const fs = require('fs')

function getQuotes() {
  try {
    const data = fs.readFileSync('quotes.txt', 'utf8')
    return data.split("\n").filter(s => s !== '')
  } catch(err) {
    console.error(err)
  }
}

const quotes = getQuotes()

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

module.exports = { randomQuote, quotes, getQuotes }
