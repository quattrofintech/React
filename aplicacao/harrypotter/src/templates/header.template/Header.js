import './index.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <img src="https://logosmarcas.net/wp-content/uploads/2020/04/Harry-Potter-Logo.png" alt="logo hp" />

        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/characters">Characters</NavLink>
            <NavLink to="/spells">Spells</NavLink>
            <NavLink to="/houses">Houses</NavLink>
        </nav>
    </header>
  )
}

export default Header