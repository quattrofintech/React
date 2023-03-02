import React, { useEffect, useState } from 'react'

// Components
import Card from '../../components/card/Card'

const People = () => {
  const url = 'https://swapi.dev/api/'
  const [people, setPeople] = useState([])
  const [previous, setPrevious] = useState('')
  const [next, setNext] = useState('')

  useEffect(() => {
    httpRequest(`${url}/people`)
  }, [])


  const button = (type) => {
    type === 0
      ?
        httpRequest(previous)
      :
        httpRequest(next)

  }

  const httpRequest = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPeople(data.results)
        setNext(data.next)
        setPrevious(data.previous)
      })
      .catch(error => console.log(error.message))
  }

  return (
    <main>
      <article className='container-center'>
        {
          people.map((item, i) => (
            <Card key={`${item.name}${i}`} titulo={item.name} url={item.url} endpoint='person' />
          ))
        }
      </article>
      <section className='page-buttons'>
        {
          previous && <button onClick={() => button(0)}>⬅️</button>
        }
        {
          !previous && <button disabled>⬅️</button>
        }
        {
          next && <button onClick={() => button(1)}>➡️</button>
        }
        {
          !next && <button disabled>➡️</button>
        }
      </section>
    </main>
  )
}

export default People