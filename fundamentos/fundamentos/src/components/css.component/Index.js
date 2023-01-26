import { useEffect, useState } from 'react'
import './index.css'
import User from './User'

const Index = () => {
    const user = [
        {
            id: 1,
            user: 'kenji',
            status: false
        },
        {
            id: 2,
            user: 'Akio',
            status: true
        },
        {
            id: 3,
            user: 'Mateus',
            status: false
        },
        {
            id: 4,
            user: 'Davi',
            status: false
        },
        {
            id: 5,
            user: 'Sayumi',
            status: false
        },
        {
            id: 6,
            user: 'Erick',
            status: false
        }
    ]

    const [lista, setLista] = useState([])
    const [status, setStatus] = useState(false)

    useEffect(() => {
        setLista([...user])
    }, [])

    const updateStatus = (id) => {
        let array = lista.map((item) => item.id === id ? ({...item, status: !item.status}) : item)
        setLista([...array])
    }

    return(
        <div className='content'>
            <h2>CSS</h2>
            <h3>Css Global - src/index.css</h3>

            <h4>Css component - css.css</h4>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ex omnis eos reiciendis non voluptas repudiandae corporis possimus, explicabo doloribus quisquam exercitationem quaerat eius dolorum magni minus obcaecati ullam sunt!</p>

            <h5 style={{color: "green", fontSize: "1.5em", backgroundColor: 'lightcyan', padding: "5px" }}>
                Css inline - utilizar style
            </h5>

            <h5 style={status ?({backgroundColor: 'green', color: 'white'}) : ({backgroundColor: "red", color: 'white'})}>Css dinâmico - inline</h5>

            <h5 className={status ? 'large' : null}>Css dinâmico - classe</h5>

            {
                lista.map((item) => (
                    <User key={item.id} id={item.id} status={item.status} user={item.user} evento={updateStatus}/>
                ))
            }
        </div>
    )
}

export default Index