import React from 'react'
import _ from 'lodash'

const Personer = ({data}) => {
  if (_.isEmpty(data)) {
    return (
      <h4>Ingen personer fundet</h4>
    )
  }

  const rows = data.map((person) => {
    return (<tr key={person.enhedsNummer}>
      <td>{person.navn}</td>
      <td>{person.adresselinie}, {person.bylinie}</td>
    </tr>)
  })

  return (
    <div>
      <h4 className='title'>Personer</h4>
      <table className='table is-narrow is-fullwidth'>
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
