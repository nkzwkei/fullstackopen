import personService from '../services/persons'

const Person = ({ person, setPersons, persons }) => {
    const handleDeletePerson = () => {
        if(window.confirm(`Delete ${person.name} ?`)) {
            setPersons(persons.filter(p => p.id !== person.id))
            personService.deletePerson({ id : person.id })
        }
    }

    return (
        <p>{person.name} {person.number}<button onClick={handleDeletePerson}>delete</button></p>
    )
}

export default Person