import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLocalStorage } from '../../hooks/useLocalStorage'

const Header = () => {
    const [user] = useLocalStorage('user')

  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/packages'>Packages</NavLink>
        <NavLink to='/hotels'>Hotels</NavLink>
        <NavLink to='/activities'>Activities</NavLink>
        <span>{user}</span>
    </nav>
  )
}

export default Header