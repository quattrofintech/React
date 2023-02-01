import React from 'react'

// Components
import Button from '../button.component/Index'
const Index = ({tarefa, data, evento}) => {
  return (
    <div className='inputs'>
        <input type='text' onChange={(e) => tarefa(e.target.value.trim())} placeholder="Tarefa . . ."/>
        <input type="datetime-local" onChange={(e) => data(e.target.value.trim())} />
        <Button evento={evento} value='Adicionar' />
    </div>
  )
}

export default Index