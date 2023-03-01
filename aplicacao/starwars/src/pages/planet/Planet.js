import React from 'react'
import { useParams } from 'react-router-dom'

const Planet = () => {
    const {number} = useParams()
  return (
    <div>Planet {number} </div>
  )
}

export default Planet