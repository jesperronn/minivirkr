import React from 'react'
import _ from 'lodash'

const Personer = (props) => {
  if (_.isEmpty(props.data)) {
    return (
      <h2>Ingen personer fundet</h2>
    )
  }

  const rows = props.data.map((person) => {
    return (
      <tr key={person.enhedsNummer}>
        <td>{person.navn}</td>
        <td>{person.adresselinie}, {person.bylinie}</td>
      </tr>
    )
  })

  return (
    <div>
      <h2>Personer</h2>
      <table className='table  table-striped table-sm'>
        <thead>
          <tr>
            <th>Navn</th>
            <th>Adresse</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  )
}

export default Personer
