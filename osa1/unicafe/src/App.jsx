import { useState } from 'react'

const StatisticLine = (props) => {
  if (props.text === "positive") {
    return (
      <tr>
          <td>{props.text}</td>
          <td>{props.value} %</td>
      </tr>
    )
  }
  return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
  )
}

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <tbody>
        <tr>
          <td>No feedback given</td>
        </tr>
      </tbody>
    )
  }
  return (
    <tbody>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.good + props.neutral + props.bad} />
      <StatisticLine
        text="average"
        value={(props.good * 1 + props.bad * 0 + props.bad * -1) / (props.good + props.neutral + props.bad)}
      />
      <StatisticLine text="positive" value={(props.good / (props.good + props.neutral + props.bad)) * 100} />
    </tbody>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodFeedback = () => {
    setGood(good + 1)
  }
  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1)
  }
  const handleBadFeedback = () => {
    setBad(bad + 1)
  }

  return (
    <>
      <>
        <p style={{ fontSize: '30px' }}>
          <b>give feedback</b>
        </p>
        <Button handleClick={handleGoodFeedback} text="good" />
        <Button handleClick={handleNeutralFeedback} text="neutral" />
        <Button handleClick={handleBadFeedback} text="bad" />
      </>
      <>
        <p style={{ fontSize: '30px' }}>
          <b>statistics</b>
        </p>
        <table>
          <Statistics good={good} neutral={neutral} bad={bad} />
        </table>
      </>
    </>
  )
}

export default App