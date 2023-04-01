import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        My balance
  $921.48

  Spending - Last 7 days

  mon
  tue
  wed
  thu
  fri
  sat
  sun

  Total this month
  $478.33

  +2.4%
  from last month
    </div>
  )
}

export default App
