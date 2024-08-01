import React from 'react'

const User = (props) => {
  return (
    <div>
        <h3 style = "{color:"blue"}>Name of the User is : {props.name}</h3>
        <h3>{props.name} logged in as : {props.type}</h3>
    </div>
  )
}

export default User