import './index.css'
import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

// CONTEXTS
import PageContext from '../../contexts/PageContext'

const Header = () => {
  const [pesquisar, setPesquisar] = useState()
  const navigate = useNavigate()

  // useContext
  const {page} = useContext(PageContext)

  const search = () => {
    if(pesquisar.trim()){
      navigate(`/search/${pesquisar}`)
      setPesquisar('')
    }
  }

  return (
    <header>
        <img src="https://logosmarcas.net/wp-content/uploads/2020/04/Harry-Potter-Logo.png" alt="logo hp" />
        
        <div className="search">
          <input type="search" 
          onChange={(e) => setPesquisar(e.target.value)} 
          onKeyDown={(e) => e.key === 'Enter' ? search() : null}
          value={pesquisar} />
          <button onClick={search}>🔍</button>
        </div>
        <nav>
            <span>Local /{page}</span>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/characters">Characters</NavLink>
            <NavLink to="/spells">Spells</NavLink>
            <NavLink to="/houses">Houses</NavLink>
        </nav>
    </header>
  )
}

export default Header