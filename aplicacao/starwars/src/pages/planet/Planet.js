import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'


const Planet = () => {
    const {number} = useParams()
    const {data: planet, isLoading, error} = useFetch(`https://swapi.dev/api/planets/${number}`)
  return (
    <div>
      <h1>{planet.name}</h1>
    </div>
  )
}

export default Planet