const Nome = (props) => {
    return(
        <div>
            <p>Nome Completo: {props.nome} {props.sobrenome}</p>
            <p>Idade: {props.age}</p>
        </div>
    )
}
export default Nome 