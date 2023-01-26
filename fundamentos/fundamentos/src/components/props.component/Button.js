const Button = ({value, evento, classe}) => {
    return(
        <button className={classe} onClick={evento}>{value}</button>
    )
}

export default Button