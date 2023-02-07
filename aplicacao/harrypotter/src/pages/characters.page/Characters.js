import './index.css'
import React, { useEffect, useState } from 'react'

// COMPONENTS
import CardCharacter from '../../components/cardCharacter.component/CardCharacter'

const Characters = () => {
    const url = 'https://hp-api.onrender.com/api'
    const [characters, setCharacters] = useState([])

    useEffect(() => {
      const request = async () => {
        const response = await fetch(`${url}/characters`)
        const data = await response.json()

        // console.log(data[0])

        setCharacters([...data])
      }

      request()
    }, [])
    

  return (
    <div className='characters'>
       <div className='card-character'> 
            {
                characters.map((item) => (
                    <CardCharacter key={item.id} character={item} />
                ))
            }
       </div>
    </div>
  )
}

export default Characters