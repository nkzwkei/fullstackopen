import personService from '../services/persons'

const Person = ({ person, setPersons, persons, setMessage, setCls }) => {
    const handleDeletePerson = () => {
        if(window.confirm(`Delete ${person.name} ?`)) {
            setPersons(persons.filter(p => p.id !== person.id))
            personService.deletePerson({ id : person.id }).catch(error => {
                console.log(error)
                setMessage(`Information of ${person.name} has already been removed from server`)
                setCls('error')
                setTimeout(() => {
                    setMessage(null)
                }, 5000)
            })
        }
    }

    return (
        <p>{person.name} {person.number}<button onClick={handleDeletePerson}>delete</button></p>
    )
}

export default Person