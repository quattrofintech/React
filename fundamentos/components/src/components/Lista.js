const Lista = () => {
    const arrayObj = ['Mesa', 'Cadeira', 'Janela', 'Sofá', 'Televisão']
    return(
        <ul>
            {
                arrayObj.map((obj, i) => (
                    <li key={i}>
                        {obj}
                    </li>
                ))
            }
        </ul>
    )
}

export default Lista