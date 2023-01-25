const Escola = ({turma, alunos}) => {
    return(
        <div>
            <div>
                <h3>Turma: {turma}</h3>
            </div>
            <div>
                {
                    alunos.map((aluno) => (
                        <li key={aluno.id}>
                            {aluno.nome}
                        </li>
                    ))
                }
            </div>
        </div>
    )
}

export default Escola