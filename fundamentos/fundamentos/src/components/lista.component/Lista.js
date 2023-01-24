import { useEffect, useState } from "react"

const Lista = () => {
    const cestaBasica = ['Arroz', 'Feijão', 'Pudim', 'Macarrão', 'Farinha', 'Tijolo', 'Leite', 'Sal', 'Açucar', 'Café', 'Carne', 'Ovo']
    
    const [valor, setValor] = useState()
    const [list, setList] = useState([])

    useEffect(() => {
        // aprendendoForEach()
        // aprendendoMap()
        // aprendendoFilter()
    }, [cestaBasica])
  
    const aprendendoForEach = () => {
        cestaBasica.forEach((item, i, array) => {
            console.log(i, item, array)
        })
    }

    const aprendendoMap = () => {
        let array = cestaBasica.map(() => {
            console.log('Foi')
        })
        console.log(array)

        array = cestaBasica.map((item) => {
            if(item === 'Pudim'){
                return 'Pão'
            }else{
                return item
            }
        })
        console.log(array)

        cestaBasica.map((item, i) => console.log(item, i))
    }

    const aprendendoFilter = () => {
        let array = cestaBasica.filter((produto) => {
            if(produto === 'Tijolo'){
                return false
            }else{
                return true
            }
        })
        console.log(array)

        array = cestaBasica.filter((produto) => produto !== 'Tijolo')
        console.log(array)

        cestaBasica.filter((produto) => {
            //console.log(produto)
        })
    }

    // PRÁTICA
    const adicionar = () => {
        if(valor.length > 2){
            if(!verify()){
                setList([{id: Math.random(), valor: valor}, ...list])
                clearInput()
            }else{
                clearInput()
            }
        }
    } 

    const remover = (id) => {
        let array = list.filter((item) => item.id !== id)
        setList(array)
    }

    const update = (id) => {
        if(valor.length > 2){
            if(!verify()){
                let array = list.map((item) => item.id === id ? {id: item.id, valor: valor} : item)
                setList(array)
                clearInput()
            }else{
                clearInput()
            }
        }
    }

    const clearInput = () => {
        document.querySelector('input[type="text"]').value=''
        document.querySelector('input[type="text"]').focus()
    }

    const verify = () => {
        let found = false
        list.forEach((item) => {
            if(item.valor === valor){
                found = true
            }
        })
        return found
    }

    return(
        <div>
            <h2>Lista</h2>
            <div>
                <input type="text" onChange={(e) => setValor(e.target.value.trim())} onKeyUp={(e) => e.key === 'Enter' ? adicionar() : ''} />
                <button onClick={adicionar}>Adicionar</button>
            </div>
            <div>
                <ul>
                    {
                        list.length === 0
                        ?
                            <p>Ainda não há itens cadastrados</p>
                        :
                        list.map((item) => (
                            <li key={item.id}>
                                {item.valor} | 
                                <button onClick={() => remover(item.id)}>Remover</button>
                                <button onClick={() => update(item.id)}>Alterar</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Lista