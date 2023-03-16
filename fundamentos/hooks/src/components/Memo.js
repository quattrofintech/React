import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [search, setSearch] = useState('')
    const [contador, setContador] = useState(0)

    const data = useMemo(() => {
        console.log('Fiz o teste')
        const a = ['arroz', 'feijão', 'macarrao', 'tomate', 'batata']
        if (a.includes(search))
            return true
        return false
    }, [search])

    const tamPassword = useMemo(() => password.length, [password])

    return (
        <div>
            <input type="text" onChange={(e) => { setUser(e.target.value); setContador(c => c + 1) }} />
            <br />
            <input type="password" onChange={(e) => { setPassword(e.target.value); setContador(c => c + 1) }} />
            <br />
            <span>{tamPassword > 5 ? '' : `Senha inválida, senha deve ter 6 ou mais caracteres ${contador}`}</span>
            <br />
            <p>Acerte a palavra</p>
            <input type="text"
                onChange={(e) => { setSearch(e.target.value); setContador(c => c + 1) }} />
            <br />
            <span>{data ? 'Achou' : `Não achou ${contador}`}</span>

        </div>
    )
}

export default Memo