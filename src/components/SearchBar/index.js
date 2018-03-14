import React from 'react'

const SearchBar = () => (
  <div className='row'>
    <div className='column'>

      <form action='#'>
        <input type='text' placeholder='Indtast CVR nummer'/>
        <input className='button-primary' type='submit' value='Søg'/>
      </form>

    </div>
  </div>
)

export default SearchBar
