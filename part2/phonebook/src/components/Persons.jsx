import Person from "./Person"

const Persons = ({ persons, setPersons }) => {
    return (
        <>
            {persons.map(person => <Person persons={persons} key={person.id} setPersons={setPersons} person={person}/>)}
        </>
    )
}

export default Persons