import Paragrafo from "./Paragrafo"

const Aluno = () => {
    const aluno = {
        nome: 'Alunos',
        idade: 30,
        endereco: {
            rua: 'Rua tal',
            n: 45,
            cep: 2345678
        }
    }
    return(
        <div>
            {aluno.nome} - {aluno.idade} - {aluno.endereco.rua}
            <Paragrafo />
        </div>
    )
}

export default Aluno