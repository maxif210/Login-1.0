import React from 'react'

const Alert = ({error}) => {
  return (
    <h5 className='alert alert-danger p-1'>{error.msg}</h5>
  )
}

export default Alert