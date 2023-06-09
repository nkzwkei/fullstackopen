import { useState, useEffect } from "react"

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

  return (
    <div>
      find countries<input value={filter} onChange={handleFilterChange} />
    </div>
  )
}

export default App;
