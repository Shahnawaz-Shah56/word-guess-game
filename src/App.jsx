import { useState } from 'react'
import './App.css'
import Start from './components/Start.wordguess..jsx'
import Home from './components/Home.wordguess..jsx'

function App() {
  const [Play, setPlay] = useState('start')

  return (
    <>
     {Play === 'start'?(<Start onPlaying={()=> setPlay('home')}/>):(<Home/>)}
    </>
  )
}

export default App
