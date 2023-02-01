import './index.css'
import React from 'react'

// Component
import Button from './Button'

const Lista = ({id, nome, email, senha, evento}) => {
    const esconderSenha = (senha) => {
        // const s 
        // s = senha.split('') '123456' => [1, 2, 3, 4, 5, 6]
        // s = s.map((item) => '**') = ************
        const s = senha.split('').map((item) => '**')
        return s
    }
  return (
    <li>
        <span>{nome}</span>
        <span>{email}</span>
        <span>{esconderSenha(senha)}</span>
        <span><Button valor={'Remover'} tipo='button'  evento={() => evento(id)}/></span>
    </li>
  )
}

export default Lista