import Person from "./Person"

const Persons = ({ persons, setPersons, setMessage, setCls }) => {
    return (
        <>
            {persons.map(person => <Person persons={persons} key={person._id} setPersons={setPersons} person={person} setMessage={setMessage} setCls={setCls}/>)}
        </>
    )
}

export default Persons