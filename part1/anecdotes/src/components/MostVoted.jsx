const MostVoted = ({ anecdotes, votes }) => {
    const mostVotedAnecdote = Math.max(...votes)
    const mostVotedIndex = votes.indexOf(mostVotedAnecdote)

    console.log(mostVotedAnecdote)

    return (
        <>
            <h2>Anecdote with most votes</h2>
            <p>{anecdotes[mostVotedIndex]}</p>
            <p>has {votes[mostVotedIndex]} vote{votes[mostVotedIndex] > 1 ? 's' : ''}</p>
        </>
    )
}

export default MostVoted