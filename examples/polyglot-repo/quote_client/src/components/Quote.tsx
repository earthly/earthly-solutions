import { useEffect, useState } from 'react'

interface QuoteProps {
  source: string // descriptive text about the source
  server: string
  iconClass: string
  iconColor: string
  gitLink?: string
  getQuote: (server: string) => Promise<string>
}

function Quote({ source, server, iconClass, gitLink, getQuote, iconColor }: QuoteProps) {
  const [quote, setQuote] = useState<string>('')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    console.log(server)
    getQuote(server)
      .then((resp) => {
        console.log(resp)
        setQuote(resp)
      })
      .catch((err) => {
        setQuote('There was an error: ' + err)
        console.log(err)
      })
  }, [])

  return (
          <div className='rounded overflow-hidden shadow-lg'>
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2 '>
            <i className={iconClass + ' align-middle text-3xl pr-1 '} style={{color: iconColor}} ></i>
            {source} at {server}
          </div>
          <p className='text-gray-700 text-base'>
            <i>"{quote}"</i>
          </p>
        </div>
        <div className='px-6 pt-4 pb-2 '>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 '>
          <a href={gitLink} target="_blank">
            <i className='devicon-github-original align-middle'></i> View Earthfile 
           </a> 
          </span>
        </div>
      </div>
    
  )
}

export default Quote
