import { useEffect, useState } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService.getPersons().then(persons => setPersons(persons))
  }, [])  

  const handleAddPerson = (event) => {
    event.preventDefault()
    if(persons.map(person => person.name).includes(name)) {
      alert(`${name} is already added in the phonebook`)
    }
    else 
    {
      personService.addPerson({name, number}).then(returnedPerson => setPersons([...persons, returnedPerson]))
      setName('')
      setNumber('')
    }
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const formHandles = { handleNameChange, handleAddPerson, handleNumberChange }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter}/>
      <h3>Add a new</h3>
      <PersonForm name={name} number={number} formHandles={formHandles}/>
      <h2>Numbers</h2>
      <Persons persons={filteredPersons}/>
    </div>
  )
}

export default App
//