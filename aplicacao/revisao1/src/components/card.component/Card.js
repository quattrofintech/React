import React from 'react'
import Image from '../image.component/Image'

const Card = ({item}) => {
  return (
    <div className='card'>
        <Image url={item.imagens[0]} title={item.nome} />
        <p>{item.nome}</p>
    </div>
  )
}

export default Card