import {ethers} from 'ethers'
import Install from './components/Install'
import Home from './components/Home'
import RabbitsCollection from './components/RabbitsCollection.json'
import {useEffect, useState} from 'react'

function App() {
  if (window.ethereum) {
    return (
      <>
        <Home />
      </>
    )
  } else {
    return <Install />
  }
}

export default App
