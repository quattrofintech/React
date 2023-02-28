import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div>
            <img src="" alt="" />
        </div>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/people'>Personagens</NavLink>
        </nav>
    </header>
  )
}

export default Header