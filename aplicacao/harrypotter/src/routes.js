import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// PAGES
import Characters from './pages/characters.page/Characters'
import Character from './pages/character.page/Character'
import Header from './templates/header.template/Header'

const routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/characters' element={<Characters />}/>
          <Route path='/character/:id' element={<Character />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default routes