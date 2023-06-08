import { useEffect, useState } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [cls, setCls] = useState('')

  useEffect(() => {
    personService.getPersons().then(persons => setPersons(persons))
  }, [])  

  const handleAddPerson = (event) => {
    event.preventDefault()
    if(persons.map(person => person.name).includes(name)) {
      if(window.confirm(`${name} is already added to phonebook, replace the old number with a new one?`)) {
        const foundPerson = persons.filter(person => person.name === name)[0]
        personService.updatePerson({ name, number, id: foundPerson.id }).then(updatedPerson => setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person)))
      }
    }
    else 
    {
      personService.addPerson({name, number}).then(returnedPerson => setPersons([...persons, returnedPerson]))
      setMessage(`Added ${name}`)
      setCls('suscess')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
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
      <Notification cls={cls} message={message} />
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h3>Add a new</h3>
      <PersonForm name={name} number={number} formHandles={formHandles} />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} setPersons={setPersons} setMessage={setMessage} setCls={setCls}/>
    </div>
  )
}

export default App