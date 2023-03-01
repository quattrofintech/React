import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Person = () => {
    const url = 'https://swapi.dev/api/'
    const {number} = useParams() 
    const [person, setPerson] = useState({})
    useEffect(() => {
      fetch(`${url}/people/${number}`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setPerson(data)
        })
        .catch(error => console.log(error))
    }, [])

  return (
    <main>
      <article>
        <h1>{person.name}</h1>
      </article>
    </main>
  )
}

export default Person