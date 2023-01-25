const Produto = ({id, descricao, preco, handlerClick}) => {
    return(
        <div>
            <div>
                <p>{id}</p>
                <p>{descricao}</p>
                <p>R$ {(preco).toFixed(2)}</p>
                <button onClick={() => handlerClick(id)}>Remover</button>
            </div>
        </div>
    )
}

export default Produto