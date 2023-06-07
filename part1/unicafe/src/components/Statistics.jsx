import StatisticLine from "./StatisticLine"

const Statistics = ({ stats }) => {
    const { good, neutral, bad, all, average } = stats

    if  (all === 0)  {
        return (
            <>
                <h2>statistics</h2>
                <p>No feedback given</p>
            </>
        )
    }

    return (
    <>
        <h2>statistics</h2>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={all} />
        <StatisticLine text='average' value={average} />
    </>
    )
}

export default Statistics