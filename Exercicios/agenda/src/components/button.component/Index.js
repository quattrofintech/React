import React from 'react'

const Index = ({evento, value}) => {
  return (
    <button onClick={evento}>
        {value}
    </button>
  )
}

export default Index