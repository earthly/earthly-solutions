import { useState, useEffect } from 'react'
import './App.css'
import Quote from './components/Quote'
import { getQuote } from './services/quoteService'

type Server = {
  address: string
  description: string
  iconClass: string
  gitLink: string
}

const servers: Server[] = [
  {
    address: import.meta.env.VITE_RUST_SERVER,
    description: 'Response from Rust server',
    iconClass: 'devicon-rust-plain',
    gitLink:
      'https://github.com/earthly/earthly-solutions/blob/main/examples/polyrepo/rust_server/Earthfile',
  },
  {
    address: import.meta.env.VITE_GO_SERVER,
    description: 'Response from Go server',
    iconClass: 'devicon-go-original-wordmark',
    gitLink:
      'https://github.com/earthly/earthly-solutions/blob/main/examples/polyrepo/go_server/Earthfile',
  },
]

function App() {
  const [_servers, setServers] = useState<Server[]>(servers)

  useEffect(() => {
    console.log('SERVERS')
    console.log(servers)
    setServers(servers)
  }, [])

  function quotes() {
    const _quotes = _servers.map((s, i) => {
      return (
        <div className=' '>
        <Quote
          key={i}
          source={s.description}
          server={s.address}
          iconClass={s.iconClass}
          gitLink={s.gitLink}
          getQuote={getQuote}
        />
        </div>
      )
    })
    return <div className='p-10 grid grid-cols-2 gap-5'>{_quotes}</div>
  }

  return (
    <>
      <div>
        <h1 className='text-3xl font-bold underline'>Earthly Polyrepo Demo</h1>
        <div className='w-10/12'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
            onClick={async () => {
              // force refresh of quotes
              await setServers([])
              await setServers(servers)
            }}
          >
            Fetch Quotes
          </button>
        </div>
        {quotes()}
        </div>
    </>
  )
}

export default App
