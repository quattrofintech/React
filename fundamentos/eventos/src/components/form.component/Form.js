const Form = () => {
    const handlerForm = (e) => {
        e.preventDefault()
        const text = document.querySelector('input[type="text"]')
        console.log(`Texto: ${text.value}`)
        e.target.reset()
    }

    return(
        <form onSubmit={handlerForm}>
            <input type="text" placeholder="Digite o nome" required />
            <input type="submit" value="Gravar" />
        </form>
    )
}

export default Form