const TotalExercises = ({ parts }) => {
    const total = parts.map(p => p.exercises).reduce((a, b) => a+b)

    return (
        <p><b>total of {total} exercises</b></p>
    )
}

export default TotalExercises