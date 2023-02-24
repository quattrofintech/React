import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useLocalStorage } from './hooks/useLocalStorage'

//Pages
import Home from './pages/home.component/Home'
import Login from './pages/login.component/Login'

const Router = () => {
  // const [nome, setNome] = useLocalStorage('nome')

  const [user, setUser] = useLocalStorage('user')

  // console.log(nome, idade)
  // setIdade(15)
  // setNome('Pedro')

  return (
    <>
      {
        user
          ?
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          :
            <Routes>
              <Route path='/' element={<Login />} />
            </Routes>
      }
    </>
  )
}

export default Router