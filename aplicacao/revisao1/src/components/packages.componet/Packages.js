import React, { useContext } from 'react'
import { useFetch } from '../../hooks/useFetch'

import Card from '../card.component/Card'
import Error from '../error.component/Error'
import Loading from '../loading.component/Loading'

import UrlContext from '../../contexts/UrlContext'

const Packages = () => {
    const {url, setNome} = useContext(UrlContext)
    const {data, isLoading, error} = useFetch(`${url}/packages`)
    setNome('João')
    
  return (
    <div className='grid'>
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

export default Packages