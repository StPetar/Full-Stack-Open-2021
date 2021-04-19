import React from 'react'

const Filter = ({ search, handleSearch }) => (
  <div>
    Find Countries: <input value={search} onChange={handleSearch} />
  </div>
)

export default Filter