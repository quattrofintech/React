import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'

const Planets = () => {
    const url = 'https://swapi.dev/api/'
    const [planets, setPlanets] = useState([])
    const [next, setNext] = useState('')
    const [previous, setPrevious] = useState('')

    useEffect(() => {
        httpRequest(`${url}/planets`)
    }, [])

    const button = (type) => {
        type === 0
            ?
            httpRequest(previous)
            :
            httpRequest(next)
    }

    const httpRequest = async (url) => {
        try {
            const response = await fetch(`${url}`)
            const data = await response.json()
            console.log(data)
            setPlanets(data.results)
            setNext(data.next)
            setPrevious(data.previous)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <main>
            <article className='container-center'>
                {
                    planets.map((item, i) => (
                        <Card key={`${item.name}${i}`} titulo={item.name} url={item.url} endpoint='planet' />
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

export default Planets