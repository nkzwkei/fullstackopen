const Showcase = ({ anecdotes, votes, index, handles }) => {
    const { handleVote, handleNext } = handles

    return (
        <>
            <h2>Anecdote of the day</h2>
            <p>{anecdotes[index]}</p>
            <p>has {votes[index]} vote{votes[index] > 1 ? 's':''}</p>
            <button onClick={handleVote}>vote</button>
            <button onClick={handleNext}>next anecdote</button>
        </>
    )
}

export default Showcase