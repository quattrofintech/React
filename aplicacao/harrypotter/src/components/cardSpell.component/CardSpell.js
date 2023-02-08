import React from 'react'

const CardSpell = ({spell, i}) => {
  return (
    <div>
        <h3>{i}</h3>
        <h2>{spell.name}</h2>
        <p>{spell.description}</p>
    </div>
  )
}

export default CardSpell