import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-white p-4'>Tailwind test</h1>
      <Card usermame = "chai aur code" />
      <Card username = "coffee aur code"/>
    </>
  )
}

export default App
