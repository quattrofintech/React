import React from 'react'

const Button = ({valor, tipo, evento}) => {
  return (
    <button type={tipo} onClick={evento}>{valor}</button>
  )
}

export default Button