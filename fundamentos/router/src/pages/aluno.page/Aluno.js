import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Aluno = ({alunos}) => {
    const { id } = useParams()
    const [aluno, setAluno] = useState({})

    useEffect(() => {
        const array = alunos.filter((item) => item.id == id)
        setAluno({...array[0]})
    }, [])

  return (
    <div>
        <h3>Aluno {id}</h3>
        <img src={aluno.avatar} />
        <h3>{aluno.nome}</h3>
        <p>{aluno.situacao ? 'APROVADO' : 'REPROVADO'}</p>
    </div>
  )
}

export default Aluno