import './index.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// COMPONENTS
import CardCharacter from '../../components/cardCharacter.component/CardCharacter'
import CardSpell from '../../components/cardSpell.component/CardSpell'

const Search = () => {
    const {search} = useParams()
    const url = 'https://hp-api.onrender.com/api'
    const [characters, setCharacters] = useState([])
    const [spells, setSpells] = useState([])

    useEffect(() => {
        const requests = async () => {
            // Characters
            let response = await fetch(`${url}/characters`)
            let data = await response.json()
            const array = data.filter((item) => item.name.toLowerCase().includes(search.toLocaleLowerCase()) || item.actor.toLowerCase().includes(search.toLocaleLowerCase()))
            console.log(array)
            setCharacters([...array])
            
            // Spells
            response = await fetch(`${url}/spells`)
            data = await response.json()
            const arraySpells = data.filter((item) => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || item.description.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            console.log(arraySpells)
            setSpells([...arraySpells])
        }

        requests()
    }, [search])

  return (
    <div className='search'>
        <h2>{search}</h2>
        <h3>Characters</h3>
        <div className='characters'>
            {
                characters.length > 0
                ?
                    <div className='card-character'> 
                        {
                            characters.map((item) => (
                                <CardCharacter key={item.id} character={item} />
                            ))
                        }
                    </div>
                :
                    <p className="list-notfound">Opss, 404 Not Found ;(</p>
            }
            
        </div>
        <h3>Spells</h3>
        <div className='spells'>
            {
                spells.length > 0
                ?
                    <div className="card-spells">
                        {
                            spells.map((item, i) => (
                                <CardSpell key={item.id} spell={item} i={i+1} />
                            ))
                        }
                    </div>
                :
                    <p className="list-notfound">Opss, 404 Not Found ;(</p>
            }
            
            
        </div>
    </div>
  )
}

export default Search