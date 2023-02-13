import { useState } from 'react'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Intro />
      <Portfolio />
    </>
  )
}

export default App
