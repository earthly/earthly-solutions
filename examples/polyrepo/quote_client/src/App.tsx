import { useState, useEffect } from 'react'
import './App.css'
import Quote from './components/Quote'
import { getQuote } from './services/quoteService'

type Server = {
  address: string
  description: string
}

const servers: Server[] = [
  {
    address: import.meta.env.VITE_RUST_SERVER,
    description: 'Response from Rust server',
  },
]

function App() {
  const rustServer: string = import.meta.env.VITE_RUST_SERVER

  const [_servers, setServers] = useState<Server[]>(servers)

  useEffect(() => {
    console.log("SERVERS")
    console.log(servers)
    setServers(servers)
  }, [])

  function quotes() {
    const _quotes = _servers.map((s, i) => {
      return (
        <Quote
          key={i}
          source={s.description}
          server={s.address}
          getQuote={getQuote}
        />
      )
    })
    return <div>{_quotes}</div>
  }

  return (
    <div className='App'>
      <h1>Earthly Demo</h1>
      <div className='card'>
        <button
          onClick={async () => {
            // force refresh of quotes
            await setServers([])
            await setServers(servers)
          }}
        >
          Random Quotes
        </button>
      </div>
      {quotes()}
    </div>
  )
}

export default App
