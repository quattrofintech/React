import React, {useState} from 'react'

const State = () => {
    let cont = 0
    const nome = 'Utilizando uma variavel padrão sem alteração de estado'
    const [contador, setContador ] = useState(0)
   

    return(
        <div>
            <div>
                <h3>Sem Estado</h3>
                {nome}
                <br />
                {cont}
                <br />
                <button onClick={() => cont += 1}>Contador</button>
            </div>

            <div>
                <h3>Com Estado</h3>
                {contador}
                <br />
                <button onClick={() => setContador(contador + 1)}>Adicionar</button>
            </div>
        </div>
    )
}

export default State