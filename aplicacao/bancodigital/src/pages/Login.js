import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({user}) => {
    const navigate = useNavigate()
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const [msg, setMsg] = useState('')

    const logar = (e) => {
        e.preventDefault()
        setMsg('')
        if(cpf.length !== 11)
            return setMsg('CPF inválido!')
        if(cpf !== user.cpf || senha !== user.senha)
            return setMsg('CPF e/ou Senha incorretos')
        navigate('/home')
    }

    return (
        <div>
            <form onSubmit={logar}>
                {
                    msg &&
                    <div>
                        <p>{msg}</p>
                    </div>
                }
                <label>
                    CPF
                    <input type="number" placeholder='CPF' title='apenas números' required minLength={11}
                    onChange={e => setCpf(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Senha
                    <input type="password" placeholder='Sua senha' title='Digite sua senha' required minLength={6}
                    onChange={e => setSenha(e.target.value)}
                    />
                </label>
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login