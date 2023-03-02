import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import { useFetch } from '../../hooks/useFetch'

// {
//     null        -> false
//     ''          -> false
//     undefined   -> false
//     []          -> false
//     {}          -> false
// }

const Starships = () => {
    //      0       1        2
    // const {data, error, isLoading} = useFetch('https://swapi.dev/api/starships')
    const [url, setUrl] = useState('https://swapi.dev/api/starships')
    const { data, isLoading, error } = useFetch(url)
    const [starships, setStarships] = useState([])
    const [next, setNext] = useState('')
    const [previous, setPrevious] = useState('')

    useEffect(() => {
        if (data) {
            setStarships(data.results)
            setNext(data.next)
            setPrevious(data.previous)
        }
    }, [data])


    const button = (type) => {
        type === 0
            ?
            setUrl(previous)
            :
            setUrl(next)
    }

    return (
        <main>
            {
                isLoading
                    ?
                        <article className='container-center'>
                            <h1>Carregando</h1>
                        </article>
                    :
                        <article className='container-center'>
                            {
                                starships &&
                                starships.map((item, i) => (
                                    <Card key={`${item.name}${i}`} titulo={item.name} url={item.url} endpoint='starships' />
                                ))
                            }
                        </article>
            }

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

export default Starships