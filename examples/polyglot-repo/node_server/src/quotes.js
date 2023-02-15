

const quotes = [
  'You live and learn. At any rate, you live.',
  'This is another random quote from Earthly',
  'Progress is a nice word. But change is its motivator and change has its enemies.',
  "It's the opinion of some that crops could be grown on the moon. Which raises the fear that it may not be long before we're paying somebody not to.",
  'Perfect as the wing of a bird may be, it will never enable the bird to fly if unsupported by the air. Facts are the air of science. Without them a man of science can never rise.',
]

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)]
}


module.exports = { randomQuote, quotes}
