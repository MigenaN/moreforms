import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HookForm from './components/HookForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HookForm></HookForm>
    </>
  )
}

export default App
