import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError()
  return (
    <div>
      <h1>Oops Something Went Wrong!!!!</h1>
      <p>{err.status}</p>
    </div>
  )
}

export default Error