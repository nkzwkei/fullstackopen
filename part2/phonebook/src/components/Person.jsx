import personService from '../services/persons'

const Person = ({ person, setPersons, persons, setMessage, setCls }) => {
    const handleDeletePerson = () => {
        if(window.confirm(`Delete ${person.name} ?`)) {
            personService.deletePerson({ id : person._id }).catch(error => {
                console.log(error)
                setMessage(`Information of ${person.name} has already been removed from server`)
                setCls('error')
                setTimeout(() => {
                    setMessage(null)
                }, 5000)
            })
            setPersons(persons.filter(p =>  p._id !== person._id))
        }
    }

    return (
        <p>{person.name} {person.number}<button onClick={handleDeletePerson}>delete</button></p>
    )
}

export default Person
// bleh