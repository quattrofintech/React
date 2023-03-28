import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Login from './pages/Login';
import Home from './pages/Home';

function App() {

  const user = {
    nome: 'Gabriel',
    cpf: '12345678912',
    senha: '123456',
    saldo: '100000',
    chequeEspecial: 500,
    saldoCheque: 500
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login user={user} />} />
        <Route path="/home" element={<Home user={user} />} />
        <Route path="/extrato" element={<p>Extrato</p>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
