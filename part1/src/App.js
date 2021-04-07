import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}  
  </button>
)

const Display = ({text, value}) => (
  <div>
    {text} {value}
  </div>
)

const Statistics = ({good, neutral, bad}) => {
  const numOfReviews = good + neutral + bad
  if (numOfReviews === 0){
    return(
      <div>
        <p>No Feedback given</p>
      </div>
    )
  }
  // Per definition (good: 1, neutral: 0, bad: -1)
  // neutral can be omitted
  const avg = (good - bad) / numOfReviews
  const rating = (good / numOfReviews) * 100
  return(
    <div>
      <Display value={good} text='good' />
      <Display value={neutral} text='neutral' />
      <Display value={bad} text='bad'/>
      Total reviews {numOfReviews}<br/>
      Average {avg}<br/>
      Rating {rating} %<br/>
    </div>
  )
}
export default App