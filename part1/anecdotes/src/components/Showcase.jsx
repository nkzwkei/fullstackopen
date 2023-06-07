import { useState } from "react"

const Showcase = ({ anecdotes }) => {
    const [index, setIndex] = useState(0)
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

    const handleNext = () => {
        setIndex((index+1)%anecdotes.length)
    }

    const handleVote = () => {
        setVotes(votes.map((vote, ind) => {
            if(index === ind) return vote+1
            return vote
        }))
    }

    return (
        <>
            <p>{anecdotes[index]}</p>
            <p>has {votes[index]} vote{votes[index] > 1 ? 's':''}</p>
            <button onClick={handleVote}>vote</button>
            <button onClick={handleNext}>next anecdote</button>
        </>
    )
}

export default Showcase