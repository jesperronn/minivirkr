import React from 'react'

const Error = (props) => {
  if (props.error.message) {
    return (
      <div className='alert alert-warning'>
        <h4 className='alert-heading'>Fejl!</h4>
        <p>{props.error.message}</p>
      </div>
    )
  } else {
    return null
  }
}

export default Error
