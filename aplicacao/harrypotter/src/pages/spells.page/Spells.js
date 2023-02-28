import './index.css'
import React, { useContext, useEffect, useState } from 'react'

// HOOKS
import { useFetch } from '../../hooks/useFetch'

// CONTEXT
import PageContext from '../../contexts/PageContext'

// COMPONENTS
import Card from '../../components/cardSpell.component/CardSpell'

const Spells = () => {
    const url = 'https://hp-api.onrender.com/api'
    // const [spells, setSpells] = useState([])
    const [headers, setHeaders] = useState({})
    const { data: spells, isLoading, error } = useFetch(`${url}/spells`, headers)

    // useContext
    const {setPage} = useContext(PageContext)
    useEffect(() => {setPage('Spells')},[])

    // useEffect(() => {
    //     const request = async () => {
    //         const response = await fetch(`${url}/spells`)
    //         const data = await response.json()
    //         console.log(data[0])
    //         setSpells([...data])
    //     }

    //     request()
    // }, [])

    return (
        <div className='spells'>
            <div className="card-spells">
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
                    spells &&
                    spells.map((item, i) => (
                        <Card key={item.id} spell={item} i={i + 1} />
                    ))
                }
            </div>

        </div>
    )
}

export default Spells