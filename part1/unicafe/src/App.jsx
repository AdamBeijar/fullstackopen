import { useState } from 'react'
import Statistics from './components/Statistics'
import Header from './components/Header'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const points = (good * 1) + (neutral * 0) + (bad * -1)
  const total = good + neutral + bad
  const average = points / total
  const positive = (good / total) * 100

  return (
    <div>
      <Header header="give feedback" />
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      {total === 0 ? <p>No feedback given</p> : 
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={total} 
        points={points} 
        positive={total == 0 ? 0 : positive} 
        average={points == 0 ? 0 : average}/>}
    </div>
  )
}

export default App