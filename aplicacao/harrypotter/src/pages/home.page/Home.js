import React, { useContext, useEffect } from 'react'

// CONTEXTS
import PageContext from '../../contexts/PageContext'
const Home = () => {
    const {page, setPage} = useContext(PageContext)

    useEffect(() => {
        setPage('Home')
    }, [])

  return (
    <div>
        <h1>Home {page}</h1>
    </div>
  )
}

export default Home