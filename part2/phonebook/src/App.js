import { useState } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [name, setName] = useState('')

  const handleAddPerson = (event) => {
    event.preventDefault()
    if(persons.map(person => person.name).includes(name)) {
      alert(`${name} is already added in the phonebook`)
    }
    else 
    {
      setPersons([...persons, { name }])
      setName('')
    }
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  } 

  const formHandles = { handleNameChange, handleAddPerson }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter />
      <h3>Add a new</h3>
      <PersonForm name={name} formHandles={formHandles}/>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )
}

export default App