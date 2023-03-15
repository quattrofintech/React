import React, { useRef, useState } from 'react'

const Ref = () => {
    const nome = useRef('Gabriel')
    const [cont, setCont] = useState(0)
    const [email, setEmail] = useState('')
    const emailRef = useRef('')

    const mostrarNome = () => {
        nome.current === 'Gabriel' ? nome.current = 'Mateus' : nome.current = 'Gabriel'
        console.log(nome.current)
    }

    const apagarEmail = () => {
        const {current} = emailRef 
        console.log('Foi')
        console.log(current.defaultValue)
        console.log(current)
        console.log(current.defaultValue)
        setEmail('')
        current.focus()
        current.setAttribute('disabled', true)
        current.classList.add('blue')
    }

    return (
        <div>
            <p>Nome: {nome.current}</p>
            <button onClick={mostrarNome}>Alterar Nome</button>
            <button onClick={() => setCont(c => c + 1)}>{cont}</button>
            <br />
            <input
                ref={emailRef}
                type="emai"
                value={email}
                onChange={((e) => setEmail(e.target.value))}
            />
            <button onClick={apagarEmail}>Enviar Email</button>
            <p>Email: {email}</p>
        </div>
    )
}

export default Ref