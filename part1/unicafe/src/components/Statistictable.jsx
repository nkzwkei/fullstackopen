const StatisticTable = ({ stats }) => {
    const { good, neutral, bad, all, average } = stats

    return (
        <table>
            <tbody>
                <tr>
                    <td>good</td>
                    <td>{good}</td>
                </tr>
                <tr>
                    <td>neutral</td>
                    <td>{neutral}</td>
                </tr>
                <tr>
                    <td>bad</td>
                    <td>{bad}</td>
                </tr>
                <tr>
                    <td>all</td>
                    <td>{all}</td>
                </tr>
                <tr>
                    <td>average</td>
                    <td>{average}%</td>
                </tr>
            </tbody>
        </table>
    )
}

export default StatisticTable