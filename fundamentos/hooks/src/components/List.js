import React, { useEffect, useState } from 'react'

const List = ({data}) => {
    const [characters, setCharacters] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        console.log('Nova Requisição. . .')
        const promi = async() => {
            setCharacters(await data())
        }
        promi()
    }, [data])

    const searchTo = search.toLocaleLowerCase()
    const personagens = characters.filter((item) => 
        item.name.toLowerCase().includes(searchTo))
        
  return (
    <div>
        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
        {
            personagens &&
            personagens.map((item) => (
                <p key={item.id}>{item.name}</p>
            ))
        }
    </div>
  )
}

export default List