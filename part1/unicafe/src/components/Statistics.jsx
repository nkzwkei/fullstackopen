import StatisticTable from "./Statistictable"

const Statistics = ({ stats }) => {
    if  (stats.all === 0)  {
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
        <StatisticTable stats={stats} />
    </>
    )
}

export default Statistics