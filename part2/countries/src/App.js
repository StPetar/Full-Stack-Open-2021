import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

function App() {
  const [country, setCountry] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then((response) => {
      console.log(response)
      setCountry(response.data)
    })
  }, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <Filter search={search} handleSearch={handleSearch} />
      <Countries
        country={country}
        search={search}
        setSearch={setSearch}
      />
    </div>
  )
}

export default App
