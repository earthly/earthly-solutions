import { useState, useEffect } from 'react'
import './App.css'
import Quote from './components/Quote'
import { getQuote } from './services/quoteService'

type Server = {
  address: string
  description: string
  iconClass: string
  iconColor: string
  gitLink: string
}

const servers: Server[] = [
  {
    address: import.meta.env.VITE_RUST_SERVER,
    description: 'Response from Rust server',
    iconClass: 'devicon-rust-plain',
    gitLink:
      'https://github.com/earthly/earthly-solutions/blob/main/examples/polyglot-repo/rust_server/Earthfile',
    iconColor: 'orange',
  },
  {
    address: import.meta.env.VITE_GO_SERVER,
    description: 'Response from Go server',
    iconClass: 'devicon-go-original-wordmark',
    gitLink:
      'https://github.com/earthly/earthly-solutions/blob/main/examples/polyglot-repo/go_server/Earthfile',
    iconColor: '#007f9f',
  },
  {
    address: import.meta.env.VITE_PYTHON_SERVER,
    description: 'Response from Python server',
    iconClass: 'devicon-python-plain',
    gitLink:
      'https://github.com/earthly/earthly-solutions/blob/main/examples/polyglot-repo/python_server/Earthfile',
    iconColor: '#ffd343',
  },
  {
    address: import.meta.env.VITE_NODE_SERVER,
    description: 'Response from Node server',
    iconClass: 'devicon-nodejs-plain',
    gitLink:
      'https://github.com/earthly/earthly-solutions/blob/main/examples/polyglot-repo/node_server/Earthfile',
    iconColor: '#026e00',
  },
]

function App() {
  const [_servers, setServers] = useState<Server[]>(servers)

  useEffect(() => {
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
            iconColor={s.iconColor}
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
      <div className='grid content-center'>
        <div className='w-12/12'>
          <img src='/logo.png' width='300' />
          <h1 className='text-3xl font-bold underline'>
            Multi-language Monorepo Demo
          </h1>
          <br />
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
            onClick={async () => {
              // force refresh of quotes onClick
              await setServers([])
              await setServers(servers)
            }}
          >
            Fetch Quotes
          </button>
          <br />
          <br />
          <div className='bg-gray-100 p-10 text-start mx-10'>
            <b>What is this?</b>
            <br />
            This is an example application built with{' '}
            <a href='https://earthly.dev' target='_blank' className='underline'>
              Earthly
            </a>{' '}
            from a{' '}
            <a
              href='https://en.wikipedia.org/wiki/Monorepo'
              target='_blank'
              className='underline'
            >
              Monorepo
            </a>{' '}
            for demonstration purposes. There is one front-end written in React
            and four separate backends written in Rust, Go, Python, and Node.js.
            <br />
            <br />
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 '>
              <a
                href='https://github.com/earthly/earthly-solutions/blob/main/examples/polyglot-repo/Earthfile'
                target='_blank'
              >
                <i className='devicon-github-original align-middle'></i> View
                Earthfile
              </a>
            </span>
          </div>
        </div>
        {quotes()}
      </div>
    </>
  )
}

export default App
