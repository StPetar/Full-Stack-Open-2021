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

const Statistic = ({value, text}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)


const Statistics = ({good, neutral, bad}) => {
  const numOfReviews = good + neutral + bad
  const avg = (good - bad) / numOfReviews
  const rating = (good / numOfReviews) * 100
  if (numOfReviews > 0){
    return(
      <table>
        <Statistic value={good} text='good' />
        <Statistic value={neutral} text='neutral' />
        <Statistic value={bad} text='bad' />
        <Statistic value={numOfReviews} text='Total reviews' />
        <Statistic value={avg} text='Average' />
        <Statistic value={rating} text='Rating' />
      </table>
    )
  }
  else{
  return(
    <div>
      <p>No Feedback given</p>
    </div>
  )}
}

export default App