import Content from "./Content"
import Header from "./Header"


const Course = ({ course }) => {
    const { name, parts } = course

    return (
        <>
            <Header name={name}/>
            <Content parts={parts}/>
        </>
    )
}

export default Course