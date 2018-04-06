import React from 'react'
import _ from 'lodash'

const Virksomheder = ({data}) => {
  if (_.isEmpty(data)) {
    return (
      <h4>Ingen virksomheder fundet</h4>
    )
  }

  const rows = data.map((virksomhed) => {
    return (
      <tr key={virksomhed.cvrnr}>
        <td>{virksomhed.cvrnr}</td>
        <td>{virksomhed.navn}</td>
        <td>{virksomhed.adresseTekst}</td>
      </tr>
    )
  })

  return (
    <div>
      <h4>Virksomheder</h4>
      <table className='table table-striped table-sm'>
        <thead className='thead-dark'>
          <tr>
            <th>CVR nr.</th>
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

export default Virksomheder
