import React from 'react'

const Footer = () => {
    const now = new Date()
  return (
    <footer>
        <p>@ {now.getFullYear()} Quattro - Todo os direitos reservados.</p>
    </footer>
  )
}

export default Footer