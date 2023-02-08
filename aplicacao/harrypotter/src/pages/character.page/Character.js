import './index.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Character = () => {
    const url = 'https://hp-api.onrender.com/api'
    const noImage = 'https://st.depositphotos.com/1898481/4049/i/600/depositphotos_40493227-stock-photo-unknown-person.jpg'
    const {id} = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
      const request = async () => {
        const response = await fetch(`${url}/characters`)
        const data = await response.json()

        const array = data.filter((item) => item.id === id)
        console.log(array[0])

        setCharacter({...array[0]})
      }

      request()
    }, [])

  return (
    <div className='character'>
        <h1>{character.name}</h1>
        <div className="content">
            <div className="img-content">
                <img src={character.image || noImage} alt={character.name} />
            </div>
            <div className="info-content">
                <p>
                    <span>Estado</span>
                    <strong>{character.alive ? 'Vivo' : 'Morto'}</strong>
                </p>
                <p>
                    <span>Bruxo</span>
                    <strong>{character.wizard ? 'Bruxo' : 'Trouxa'}</strong>
                </p>
                {character.ancestry && 
                    <p>
                        <span>Sangue</span>
                        {/* <strong>{character.ancestry || 'not found'}</strong> */}
                        
                            <strong>{character.ancestry}</strong>
                    </p>
                }
                <p>
                    <span>Espécie</span>
                    <strong>{character.species}</strong>
                </p>
                <p>
                    <span>Casa</span>
                    <strong>{character.house}</strong>
                </p>
                <p>
                    <span>Genero</span>
                    <strong>{character.gender}</strong>
                </p>
                <p>
                    <span>Aniversário</span>
                    <strong>{character.dateOfBirth}</strong>
                </p>
                <p>
                    <span>Cor dos Olhos</span>
                    <strong>{character.eyeColour}</strong>
                </p>
                <p>
                    <span>Cor do Cabelo</span>
                    <strong>{character.hairColour}</strong>
                </p>
                <p>
                    <span>Patrono</span>
                    <strong>{character.patronus}</strong>
                </p>
                <p>
                    <span>{character.gender === 'male' ? 'Ator' : 'Atriz'}</span>
                    <strong>{character.actor}</strong>
                </p>
            </div>
        </div>
    
    </div>
  )
}

export default Character