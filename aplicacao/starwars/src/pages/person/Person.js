import React from 'react'
import { useParams } from 'react-router-dom'

const Person = () => {
    const {number} = useParams() 
  return (
    <div>Person {number}</div>
  )
}

export default Person