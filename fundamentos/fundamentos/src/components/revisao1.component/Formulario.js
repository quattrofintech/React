import './index.css'
import React, { useState } from 'react'

// Component
import Button from './Button'

const Formulario = ({nome, email, evento}) => {
    const [senha, setSenha] = useState('')
    const [confirme, setConfirme] = useState('')

    const verificarSenha = (e) => {
        e.preventDefault()
        if(senha === confirme){
            evento(senha)
            document.querySelector('form').reset()
        }else{
            console.log(`Senhas devem ser identicas ${senha} - ${confirme}`)
        }
    }

  return (
    <form onSubmit={verificarSenha} className='formulario'>
        <div>
            <label>
                Nome <br />
                <input type="text" onChange={(e) => nome(e.target.value.trim())} required />
            </label>
        </div>
        <div>
            <label>
                Email <br />
                <input type="email" onChange={(e) => email(e.target.value.trim())} required />
            </label>
        </div>
        <div>
            <div>
                <label>
                    Senha <br />
                    <input type="password" minLength={6} onChange={(e) => setSenha(e.target.value.trim())} required />
                </label>
            </div>
            <div>
                <label>
                    Confirme a senha <br />
                    <input type="password" minLength={6} onChange={(e) => setConfirme(e.target.value.trim())} required />
                </label>
            </div>
        </div>
        <div>
            <Button valor='Cadastrar Usuário' tipo={'submit'} />
        </div>
    </form>
  )
}

export default Formulario