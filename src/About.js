import React from 'react'
import User from './User'
import UserClass from './UserClass'

const About = () => {
  return (
    <div style={{marginBottom:"15px"}}>
      <h1>About us...</h1>
      {/* <User name={"Prudhvi"} age={37} address={"Bangalore"}/>
      <User name={"Mahesh"} age={36} address={"Hyderabad"}/> */}
      <UserClass name={"Desai--class"} age={39} address={"Mumbai"}/>
      <UserClass name={"Mahesh--class"} age={39} address={"Mumbai"}/>
    </div>
  )
}

export default About