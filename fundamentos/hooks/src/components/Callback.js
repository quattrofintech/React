import React, { useCallback, useEffect, useState } from 'react'
import List from './List'

const Callback = () => {
    const [data, setData] = useState([])
    const [cont, setCont] = useState(0)
    const [status, setStatus] = useState(false)

    useEffect(() => {
        httpRequest()
    }, [])

    const httpRequest = () => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(data => setData(data.results))
    }

    const requisicao = useCallback(() => {
       return fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(data => data.results)
    }, [status])

    

    

    return (
        <div>
            {/* <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
            {
                personagens &&
                personagens.map((item) => (
                    <p key={item.id}>{item.name}</p>
                ))
            } */}
            <button onClick={() => setCont(c => c + 1)}>
                {cont}
            </button>
            <button onClick={() => setStatus(s => !s)}>
                {status ?'Verdadeiro':'False'}
            </button>
            <List data={requisicao} />
        </div>
    )
}

export default Callback