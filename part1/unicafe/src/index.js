import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistic = ({ text, value, symbol = '' }) => (
  <tr>
    <td>{text}</td>
    <td>{value}{symbol}</td>
  </tr>
)

const Statistics = ({ data }) => {
  if(data[3].value === 0) {
    return (
      <div>
      <h1>Statistics</h1>
        No Feedback given
      </div>
    )
  }
  
  let [good, neutral, bad, total] = data;

  return(
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <Statistic text="Good" value={good.value} />
          <Statistic text="Neutral" value={neutral.value} />
          <Statistic text="Bad" value={bad.value} />
          <Statistic text="All" value={total.value} />
          <Statistic text="Average" value={(good.value  - bad.value) / total.value} />
          <Statistic text="Positive" value={(good.value / total.value) * 100} symbol='%' />
        </tbody>
      </table>
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    setTotal(total + 1);
    setGood(good + 1);
  }
  const handleNeutralClick = () => {
    setTotal(total + 1);
    setNeutral(neutral + 1);
  }
  const handleBadClick = () => {
    setTotal(total + 1);
    setBad(bad + 1);
  }

  const data = [
    {
      name: 'Good',
      value: good
    },
    {
      name: 'Neutral',
      value: neutral
    },
    {
      name: 'Bad',
      value: bad
    },
    {
      name: 'Total',
      value: total
    }
  ]

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <Button onClick={handleGoodClick} text="Good" />
        <Button onClick={handleNeutralClick} text="Neutral" />
        <Button onClick={handleBadClick} text="Bad" />
      </div>
      <Statistics data={data} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
