import './index.css'
import React from 'react'
import Formulario from './Formulario'

const Apresentacao = (props) => {
  return (
    <main className='apresentacao'>
        <div className='text'>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempora omnis ab veniam in alias nihil, eum dolorum tenetur delectus quae hic animi possimus maxime quaerat quia mollitia consectetur libero? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, soluta temporibus amet error harum natus. Unde dolores obcaecati aliquam eos, inventore laboriosam impedit eum ratione consectetur eaque aliquid cumque vel. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus cumque blanditiis esse voluptates ut recusandae sed nulla voluptate, ratione eveniet officia at officiis corrupti explicabo quaerat repellendus suscipit sapiente consequuntur.
            </p>
        </div>
        <div className='form'>
            <Formulario nome={props.nome} email={props.email} evento={props.evento}/>
        </div>
    </main>
  )
}

export default Apresentacao