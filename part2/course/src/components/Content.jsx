import Part from "./Part"
import TotalExercises from "./TotalExercises"

const Content = ({ parts }) => {
    return (
        <>
            {parts.map(p => <Part key={p.id} name={p.name} exercises={p.exercises}/>)}
            <TotalExercises parts={parts}/>
        </>
    )
}

export default Content