import React, { useState } from 'react'

import { useLocalStorage } from '../../hooks/useLocalStorage'

const Login = () => {
    const [user, setUser] = useState('')
    const [local, setLocal] = useLocalStorage('user')

    const logar = () => {
        alert('Logado!')
        setLocal(user)
    }

  return (
    <form onSubmit={logar}>
        <div>
            <input type="text" onChange={(e) => setUser(e.target.value)} required/>
        </div>
        <div>
            <input type="submit" value='Logar' />
        </div>
    </form>
  )
}

export default Login