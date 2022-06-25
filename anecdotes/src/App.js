import { useState } from 'react'

const Anecdote = ({ anecdote }) => {
  return (
    <>
      <p>{anecdote.text}</p>
      <p>has {anecdote.vote} votes</p>
    </>

  );

}

const App = () => {

  const [anecdotes, setAnecdotes] = useState([
    {
      "text": 'If it hurts, do it more often',
      "vote": 0

    },
    {
      "text": 'Adding manpower to a late software project makes it later!',
      "vote": 0
    },
    {
      "text": 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      "vote": 0
    },
    {
      "text": 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      "vote": 0
    },
    {
      "text": 'Premature optimization is the root of all evil.',
      "vote": 0
    },
    {
      "text": 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      "vote": 0
    },
    {
      "text": 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
      "vote": 0
    }
  ])
  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostVoted] = useState(0);

  const handleClick = () => {
    let randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  }

  const handleVote = () => {
    //handles 
    const copy = [...anecdotes];
    copy[selected].vote++;
    setAnecdotes(copy);

    // handle most voted
    const votes = copy.map(anecdote => anecdote.vote);
    const maxVote = Math.max(...votes);
    setMostVoted(votes.indexOf(maxVote));
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} />
      <button onClick={handleVote}>vote</button><button onClick={handleClick}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={anecdotes[mostVoted]} />
    </div >
  )
}

export default App