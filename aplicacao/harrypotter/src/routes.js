import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// TEMPLATE
import Header from './templates/header.template/Header'

// CONTEXTS
import PageContext from './contexts/PageContext'

// PAGES
import Characters from './pages/characters.page/Characters'
import Character from './pages/character.page/Character'
import Spells from './pages/spells.page/Spells'
import Houses from './pages/houses.page/Houses'
import House from './pages/house.page/House'
import Search from './pages/search.page/Search'
import Home from './pages/home.page/Home'

const Router = () => {
  const [page, setPage] = useState('')
  
  return (
    <PageContext.Provider value={{page, setPage}}>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/characters' element={<Characters />}/>
            <Route path='/spells' element={<Spells />}/>
            <Route path='/houses' element={<Houses />}/>
            <Route path='/character/:id' element={<Character />}/>
            <Route path='/house/:name' element={<House />}/>
            <Route path='/search/:search' element={<Search />}/>
        </Routes>
      </BrowserRouter>
    </PageContext.Provider>
  )
}

export default Router