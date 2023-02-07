import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardCharacter = ({character}) => {
    const noImage = 'https://st.depositphotos.com/1898481/4049/i/600/depositphotos_40493227-stock-photo-unknown-person.jpg'

    const navigate = useNavigate()

    const seeMore = (id) => {
        navigate(`/character/${id}`)
    }

  return (
    <div onClick={() => seeMore(character.id)}> {/*</Link><Link to={`/character/${character.id}`}></Link> */}
        <div className="image">
            <img src={character.image || noImage} alt="" />
        </div>
        <div className='info'>
            <h3>{character.name}</h3>
            <p>{character.house}</p>
            <p>{character.ancestry}</p>
        </div>
        
    </div>
  )
}

export default CardCharacter