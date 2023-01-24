import React, {useState} from 'react'

const Condicional = () => {
    const [status, setStatus] = useState(false)
    const [nome, setNome] = useState('Pedro')

    return(
        <div>
            <h2>Condicional JSX</h2>
            <div>
                {
                    status && <p>O status é VERDADEIRO</p>
                }
                {
                    !status && <p>O status é FALSO</p>
                }
                {
                    nome === 'Pedro' && <p>Olá, {nome}</p>
                }
            </div>
            <div>
                <button onClick={(e) => setStatus(!status)}>Alterar Status</button>
                <button onClick={(e) => setNome('João')}>Alterar Nome</button>
            </div>
            <div>
                {
                    status 
                        ?
                            <div>
                                <header>
                                    <h3>Título</h3>
                                </header>
                                <main>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt corporis repellat eius accusamus facere voluptas eveniet asperiores fuga ipsam consequuntur architecto quis, quaerat veniam, beatae modi vitae totam iure magnam.</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt corporis repellat eius accusamus facere voluptas eveniet asperiores fuga ipsam consequuntur architecto quis, quaerat veniam, beatae modi vitae totam iure magnam.</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt corporis repellat eius accusamus facere voluptas eveniet asperiores fuga ipsam consequuntur architecto quis, quaerat veniam, beatae modi vitae totam iure magnam.</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt corporis repellat eius accusamus facere voluptas eveniet asperiores fuga ipsam consequuntur architecto quis, quaerat veniam, beatae modi vitae totam iure magnam.</p>
                                </main>
                                <footer>
                                    <p>Todos os direitos reservados</p>
                                </footer>
                            </div>
                        :
                            <div>
                                <p>Carregando . . .</p>
                            </div>

                }
                {/* condição    ? se verdadeiro         : se falso */}
                {/* { status        ? console.log('true')   : console.log('false') } */}
            </div>

        </div>
    )
}

export default Condicional