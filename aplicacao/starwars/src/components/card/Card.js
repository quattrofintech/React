import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ titulo, subTitulo, texto, url }) => {
    const number = url.split('/')[5]
    return (
        <Link to={`/person/${number}`} className='card-item'>
            <div>
                <p className='title'>{titulo}</p>
                <p className='subTitle'>{subTitulo}</p>
                <p className='text'>{texto}</p>
            </div>
        </Link>
    )
}

export default Card