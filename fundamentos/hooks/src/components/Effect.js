import { useEffect, useState } from "react"

const Effect = () => { 
    const [nome, setNome] = useState()
    const [salario, setSalario] = useState(1000)
    const [vendas, setVendas] = useState(0)
    const [time, setTime] = useState(0)

    useEffect(() => {
        console.log('Utlizando useEffect')
    }, [])

    useEffect(() => {
        document.title = nome
    }, [nome])

    useEffect(() => {
       setSalario(pasda => pasda + (vendas * 1.89))
    }, [vendas])

    useEffect(() =>{
        console.log('Fui chamado atoa')
    })
    
    useEffect(() => {
    //   const timer = setTimeout(() => {
    //     setTime(t => t + 1)
    //   }, 3000);
        
        const btn = document.querySelector('#testeButton')
        btn.addEventListener('click', clicou)
    
        return () => btn.removeEventListener('click', clicou)
        // return () => clearTimeout()

    }, [])
    

    const clicou = () => {
        console.log('Clicou em mim')
    }
    return(
        <div>
            <div>
                <p>{nome}</p>
                <div>
                    <input type="text" onChange={(e) => setNome(e.target.value)} />
                </div>
            </div>

            <div>
                <p>R$ {salario.toFixed(2)}</p>
                <div>
                    <button onClick={() => setVendas(vendas + 1)}>Vendas: qnt {vendas}</button>
                </div>
            </div>
            <div>
                <p>Timer:{time}</p>
            </div>
            <div>
                <button id='testeButton'>Teste</button>
            </div>
        </div>
    )
}

export default Effect