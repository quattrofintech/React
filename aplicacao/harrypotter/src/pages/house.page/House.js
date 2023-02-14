import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// HOOKS
import { useFetch } from '../../hooks/useFetch'

// COMPONENTS
import Card from '../../components/cardCharacter.component/CardCharacter'

const House = () => {
    const url = 'https://hp-api.onrender.com/api'
    const { name } = useParams()
    // const [characters, setCharacters] = useState([])
    const [headers, setHeaders] = useState({})
    const { data: characters, isLoading, error } = useFetch(`${url}/characters/house/${name}`, headers)

    // useEffect(() => {
    //     const request = async () => {
    //         const response = await fetch(`${url}/characters/house/${name}`)
    //         const data = await response.json()
    //         console.log(data)
    //         setCharacters([...data])
    //     }
    //     request()
    // }, [])

    return (
        <div className='characters'>
            <h1 style={{ textAlign: 'center', fontSize: '3em', textTransform: 'uppercase' }}>{name}</h1>
            <div className="card-character">
                {
                    !isLoading &&
                    error &&
                    <p>Error ;( Entre em contato com o suporte!
                        <br />
                        {error.message}
                    </p>
                }
                {
                    isLoading &&
                    <div id="loading"></div>
                }
                {
                    !isLoading &&
                    !error &&
                    characters &&
                    characters.map((character) => (
                        <Card key={character.id} character={character} />
                    ))
                }
            </div>
        </div>
    )
}

export default House