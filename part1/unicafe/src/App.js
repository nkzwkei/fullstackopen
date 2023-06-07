import { useState } from 'react'
import Statistics from './components/Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good+1)
  }

  const handleNeutral = () => {
    setNeutral(neutral+1)
  }

  const handleBad = () => {
    setBad(bad+1)
  }

  const all = good+neutral+bad
  const average = all === 0 ? 0 : good/all*100

  const stats = { good, neutral, bad, all, average }

  return (
    <>
      <h2>give feedback</h2>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <Statistics stats={stats}/>
    </>
  );
}

export default App
