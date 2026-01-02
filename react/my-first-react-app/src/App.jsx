import { useState } from 'react'

import './App.css'
import { Greeting } from './Greeting'

function App() {
  const [count, setCount] = useState(0)

  return <Greeting />
}

export default App
