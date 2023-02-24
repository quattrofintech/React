import React, { useContext } from 'react'
import { useFetch } from '../../hooks/useFetch'

import Card from '../card.component/Card'
import Error from '../error.component/Error'
import Loading from '../loading.component/Loading'

// Contexts
import UrlContext from '../../contexts/UrlContext'

const Activities = () => {
    const {url, nome} = useContext(UrlContext)
    console.log(url)
    const {data, isLoading, error} = useFetch(`${url}/activities`)

  return (
    <div className='grid'>
        <h1>{nome}</h1>
        {
            isLoading && <Loading />
        }
        {
            !isLoading &&
            data &&
            data.map((item) => (
                <Card key={item.id} item={item} />
            ))
        }
        {
            !isLoading &&
            error &&
            <Error error={error} />
        }
    </div>
  )
}

export default Activities