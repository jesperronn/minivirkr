import React from 'react'
import _ from 'lodash'

const Error = (props) => {

  if (_.isEmpty(props.error)) {
    return null
  }

  return (
    <div className='alert alert-warning'>
      <h4 className='alert-heading'>Fejl!</h4>
      <p>Noget tekst</p>
    </div>
  )
}

export default Error
