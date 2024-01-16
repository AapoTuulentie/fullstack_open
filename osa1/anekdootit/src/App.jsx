import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length + 1).fill(0))

  const handleAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const VoteAnecdote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const MostVoted = ({ anecdotes, points }) => {
    const maxVotesIndex = points.indexOf(Math.max(...points))
    return (
      <>
        <p>{anecdotes[maxVotesIndex]}</p>
        <p>has {points[maxVotesIndex]} votes</p>
      </>
    )
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {points[selected]} votes</p>
      <Button handleClick={() => handleAnecdote()} text="next anecdote"/>
      <Button handleClick={() => VoteAnecdote()} text="vote"/>
      <h1>Anecdote with most votes</h1>
      <MostVoted anecdotes={anecdotes} points={points} />
    </div>
  )
}

export default App
