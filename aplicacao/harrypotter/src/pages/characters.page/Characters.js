import './index.css'
import React, { useContext, useEffect, useState } from 'react'

// HOOKS
import { useFetch } from '../../hooks/useFetch'

//CONTEXTS
import PageContext from '../../contexts/PageContext'

// COMPONENTS
import CardCharacter from '../../components/cardCharacter.component/CardCharacter'

const Characters = () => {
  const url = 'https://hp-api.onrender.com/api'
  // const [characters, setCharacters] = useState([])

  // useEffect(() => {
  //   const request = async () => {
  //     const response = await fetch(`${url}/characters`)
  //     const data = await response.json()

  //     // console.log(data[0])

  //     setCharacters([...data])
  //   }

  //   request()
  // }, [])


  // useFetch
  const [headers, setHeaders] = useState({})
  const { data: characters, isLoading, error } = useFetch(`${url}/characters`, headers)

  // useContext
  const {setPage} = useContext(PageContext)

  useEffect(() => { setPage('Characters')}, [])
  
  // const [url1, setUrl1] = useState()
  // const { data: characters, isLoading, error } = useFetch(url1, headers)

  // const head = () => {
  //     setHeaders(
  //       {
  //         method: 'POST',
  //         // body: {
  //         //   "userID": 10,
  //         //   "title": 'Testando useFetch',
  //         //   "id": 100,
  //         //   "body": 'Aprendendo a criar custom hooks -> useFetch'
  //         // }
  //       }
  //     )

  //     setUrl1('https://jsonplaceholder.typicode.com/posts/9')
  // }

  // 
  return (
    <div className='characters'>
      <div className='card-character'>
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
          characters.map((item) => (
            <CardCharacter key={item.id} character={item} />
          ))
        }
      </div>
      {/* <button onClick={head}>Criar um Header</button> */}
    </div>
  )
}

export default Characters