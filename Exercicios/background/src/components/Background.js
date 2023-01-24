import React, { useEffect, useState } from 'react'

const Background = () => {
    const [color, setColor] = useState('#000')
    const [opacity, setOpacity] = useState(100)

    useEffect(() => {
        document.body.style.backgroundColor = `${color}`
        document.body.style.opacity = `${opacity/100}`
        document.title = `${color}`
    }, [color, opacity])

  return (
    <div>
        <h1>Exercício</h1>
        <input type="color" onInput={(e) => setColor(e.target.value)} />
        <input type="range" min={10}  max={100} value={opacity} onChange={(e) => setOpacity(e.target.value)}/>
    </div>
  )
}

export default Background