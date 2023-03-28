import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = ({ user }) => {
    const [msg, setMsg] = useState('')
    const [operacao, setOperacao] = useState(0)
    const saldo = (user.saldo / 100).toFixed(2)

    const [operacoes, setOperacoes] = useState([])

    const depositar = () => {
        if (operacao < 1)
            return setMsg('Valor mínimo para deposito de R$ 1,00')
        user.saldo = (operacao * 100) + Number(user.saldo)
        setOperacao(0)
        const body = {
            id: Math.random(),
            user: user,
            operacao: 'desposito',
            valor: operacao,
            data: new Date(),
            saldo: user.saldo
        }

        setOperacoes([body, ...operacoes])
    }

    const sacar = () => {
        if (operacao < 1)
            return setMsg('Valor mínimo para saque de R$ 1,00')
        if(Number(user.saldo) - (operacao * 100) < 0 && !user.chequeEspecial)
            return setMsg('Saldo insuficiente')
        if((Number(user.saldoCheque) + Number(user.saldo)) - (operacao * 100) < 0)
            return setMsg('Cheque Especial Insuficiente')
        user.saldo = Number(user.saldo) - (operacao * 100) 
        setOperacao(0)
        const body = {
            id: Math.random(),
            user: user,
            operacao: 'saque',
            valor: operacao,
            data: new Date(),
            saldo: user.saldo
        }

        setOperacoes([body, ...operacoes])
    }

    return (
        <div>
            <h1>R$ {saldo}</h1>
            <div>
                {
                    msg &&
                    <div>
                        <p>{msg}</p>
                    </div>
                }
                <div>
                    <input type="number" value={operacao} onChange={e => setOperacao(Number(e.target.value))} min="1" />
                </div>
                <div>
                    <button type="button" onClick={depositar}>Depositar</button>
                    <button type="button" onClick={sacar}>Sacar</button>
                </div>
            </div>
            <Link to='/extrato'>Extrato Completo</Link>


            <ul>
                {
                    operacoes &&
                    operacoes.map((item) => (
                        <li key={item.id}>
                            <span>R$ {(item.saldo / 100).toFixed(2)} </span>
                            <span> {item.operacao} de </span>
                            <span>R$ {(item.valor).toFixed(2)} em </span>
                            {
                                item.data &&
                                <span>
                                    <span> {`${item.data.getDate()}/
                                    ${item.data.getMonth() + 1}
                                    /${item.data.getFullYear()}`} </span>
                                    <span> as {`${item.data.getHours()}h${item.data.getMinutes()}m${item.data.getSeconds()}s`} </span>
                                </span>
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Home