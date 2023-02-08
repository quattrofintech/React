import './index.css'
import React, { useEffect, useState } from 'react'

// COMPONENTS
import Card from '../../components/cardSpell.component/CardSpell'

const Spells = () => {
    const url = 'https://hp-api.onrender.com/api'
    const [spells, setSpells] = useState([])

    useEffect(() => {
        const request = async () => {
            const response = await fetch(`${url}/spells`)
            const data = await response.json()
            console.log(data[0])
            setSpells([...data])
        }

        request()
    }, [])
  return (
    <div className='spells'>
        <div className="card-spells">
            {
                spells.map((item, i) => (
                    <Card key={item.id} spell={item} i={i+1} />
                ))
            }
        </div>
        
    </div>
  )
}

export default Spells