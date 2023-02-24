import './App.css';
import {BrowserRouter} from 'react-router-dom'

// Contexts
import UrlContex from './contexts/UrlContext'

//Rotas
import Router from './router';
import { useState } from 'react';
import Header from './template/header/Header';

function App() {
  // Inserir e Alterar LOCAL
  //  localStorage.setItem('nome', 'Gabriel')
  //  localStorage.setItem('nome', 'Lucas')

  // Remover
  //  localStorage.removeItem('nome')

  // Clear Local Storage
  //  localStorage.clear()

  // Inserir e Alterar SESSION 
  //  sessionStorage.setItem('pais', 'Brasil')
  //  sessionStorage.setItem('pais', 'Argentina')

  // Remover
  //  sessionStorage.removeItem('pais')

  // Clear Local Storage
  //  sessionStorage.clear()

  const [nome, setNome] = useState('Gabriel')
  
  return (
    <BrowserRouter>
        {/* 
        <p>Nome: {localStorage.getItem('nome')}</p>
        <p>Sobrenome: {localStorage.getItem('sobrenome')}</p>
        <p>Idade: {localStorage.getItem('idade')}</p> 
        <p>País: {sessionStorage.getItem('pais')}</p> 
        */}
      <Header />
      <UrlContex.Provider value={{url: 'https://api-burb.onrender.com/api', nome, setNome}}>
        <Router />
      </UrlContex.Provider>
    </BrowserRouter>
  );
}

export default App;
