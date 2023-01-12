import React from 'react'

function Test(props) {
  console.log(props)
  return (
    <div className='App' >
      <h1>Name: {props.name} and Age: {props.age} </h1>
      <h1>{props.children}</h1>
    </div>
  )
}

export default Test