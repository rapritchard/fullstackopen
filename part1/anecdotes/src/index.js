import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const TopAnecdote = ({ ancedotes, points }) => {
  if(Object.keys(points).length === 0){
    return (
      <>
      </>
    )
  }
  
  let topAnecdote = Object.keys(points).reduce((a, b) => points[a] > points[b] ? a : b);

  return (
    <div>
      <h1>Ancedote with the most votes</h1>
      {anecdotes[topAnecdote]}
      <br />
      has {points[topAnecdote]} votes
    </div>

  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({})

  const handleNextAnecdoteClick = () => setSelected(Math.floor(Math.random() * props.anecdotes.length));
  
  const handleVoteClick = () => {
    setPoints({...points, [selected]: (points[selected]) ? points[selected] + 1 : 1});
  }

  return (

    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br/>
      has {points[selected] ? points[selected]: 0} votes
      <br/>
      <Button onClick={handleVoteClick} text="Vote"/>
      <Button onClick={handleNextAnecdoteClick} text="Next anecdote" />
      <TopAnecdote anecdotes={props.anecdotes} points={points} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />,document.getElementById('root'))