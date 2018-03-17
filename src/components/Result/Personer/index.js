import React from 'react'
import _ from 'lodash'

const Personer = (props) => {
  if (_.isEmpty(props.data)) {
    return (
      <h4>Ingen personer fundet</h4>
    )
  }

  const rows = props.data.map((person) => {
    return (<tr key={person.enhedsNummer}>
      <td>{person.navn}</td>
      <td>{person.adresselinie}, {person.bylinie}</td>
    </tr>)
  })

  return (
    <div>
      <h4>Personer</h4>
      <table className='table  table-striped table-sm'>
        <thead className='thead-dark'>
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
