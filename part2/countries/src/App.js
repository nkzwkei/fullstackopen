import { useState, useEffect } from "react"

import Display from './components/Display'

import countriesService from './services/countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    countriesService.getAll().then(allCountries => setCountries(allCountries))
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      find countries<input value={filter} onChange={handleFilterChange} />
      <Display countries={filteredCountries}/>
    </div>
  )
}

export default App;