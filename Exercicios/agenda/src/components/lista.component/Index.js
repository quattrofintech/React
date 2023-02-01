import React from 'react'

// Components
import Button from '../button.component/Index'
const Index = ({data, tarefa, id, status, evento}) => {
  return (
    <li className={ status ? 'realizado' : null}>
        <span>{tarefa}</span>
        <span>{data}</span>
        { status && <Button value='Realizado' />}
        { !status && <Button evento={() => evento(id)} value="Realizar"/> }
    </li>
  )
}

export default Index