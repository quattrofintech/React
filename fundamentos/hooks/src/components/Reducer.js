import React, { useReducer, useState } from 'react'
import { useFetch } from './useFetch'

const Reducer = () => {
    const [number, setnumber] = useState(0)

    // const exe = (estado, acao) => {
    //     switch(acao){
    //         case 'decrementar':
    //             return estado - 1
    //         case 'incrementar':
    //             return estado + 1
    //         default:
    //             return 'Acao não encontrada'
    //     }
    // }

    // const [contador, executar] = useReducer(exe, 0)

    const reducer = (state, action) => {
        switch (action) {
            case 'decrement':
                // Bloco de processamento
                return { ...state, count: state.count - 1, showText: !state.showText }
            case 'increment':
                return { ...state, count: state.count + 1, showText: !state.showText  }
            default:
                return {...state, err: 'Action Not Found'}
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        showText: true,
        err: ''
    })

    const {count, showText, err} = state
    
    const {data, isLoading, error} = useFetch('https://rickandmortyapi.com/api/character')

    return (
        <div>
            <button onClick={() => dispatch('decrement')}>-</button>
            {count}
            <button onClick={() => dispatch('increment')}>+</button>
            {showText && <p>Exibindo texto</p>}
            {err && <p>{state.error}</p>}

            {
                data && 
                data.map(item => (
                    <p key={item.id}>{item.name}</p>
                ))
            }
        </div>
    )
}

export default Reducer