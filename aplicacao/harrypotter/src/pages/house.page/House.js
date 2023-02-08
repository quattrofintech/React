import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// COMPONENTS
import Card from '../../components/cardCharacter.component/CardCharacter'

const House = () => {
    const url = 'https://hp-api.onrender.com/api'
    const {name} = useParams()
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        const request = async () => {
            const response = await fetch(`${url}/characters/house/${name}`)
            const data = await response.json()
            console.log(data)
            setCharacters([...data])
        }
        request()
    }, [])
  return (
    <div className='characters'>
        <h1 style={{textAlign: 'center', fontSize: '3em', textTransform: 'uppercase'}}>{name}</h1>
        <div className="card-character">
            {
                characters.map((character) => (
                    <Card key={character.id} character={character} />
                ))
            }
        </div>
    </div>
  )
}

export default House