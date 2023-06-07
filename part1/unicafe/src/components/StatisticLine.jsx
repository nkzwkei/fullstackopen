const StatisticLine = ({ text, value }) => {
    return (
        <p>{text} {value}{text === 'average' ? '%':''}</p>
    )
}

export default StatisticLine