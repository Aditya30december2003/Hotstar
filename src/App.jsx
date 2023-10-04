import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Channels from './components/Channels'
import Recommends from './components/Recommends'
import Trending from './components/Trending'
import New from './components/New'
import Originals from './components/Originals'
import Sports from './components/Sports'
import Languages from './components/Languages'
import Generes from './components/Generes'
import Popular from './components/Popular'
import Specials from './components/Specials'
import Bottom from './components/Bottom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Channels/>
      <Recommends />
      <Trending />
      <Sports />
      <New /> 
      <Languages />
      <Generes />
      <Originals />
      <Popular />
      <Specials />
      <Bottom />
    </>
  )
}

export default App


