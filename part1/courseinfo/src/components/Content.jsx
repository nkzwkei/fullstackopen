import Part from './Part'

const Content = ({ content }) => {
    const {part1, exercises1, part2, exercises2, part3, exercises3} = content

    return (
        <div>
            <Part description={part1} exercises={exercises1} />
            <Part description={part2} exercises={exercises2} />
            <Part description={part3} exercises={exercises3} />
        </div>
    )
}

export default Content