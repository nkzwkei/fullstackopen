const Total = ({ content }) => {
    const { exercises1, exercises2, exercises3 } = content

    return (
        <p>Number of exercises {exercises1+exercises2+exercises3}</p>
    )
}

export default Total