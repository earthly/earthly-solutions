import { useEffect, useState } from 'react'

interface QuoteProps {
  source: string // descriptive text about the source
  server: string
  getQuote: (server: string) => Promise<string>
}

function Quote({ source, server, getQuote }: QuoteProps) {
  const [quote, setQuote] = useState<string>('')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    console.log(server)
    getQuote(server).then((resp) => {
      console.log(resp)
      setQuote(resp)
    }).catch(err => {
        setQuote("There was an error: " + err)
        console.log(err)
      })
  }, [])

  return (
    <div>
      <i>{source}</i>
      <h3>{quote}</h3>
    </div>
  )
}

export default Quote
