import React from 'react'

const Image = ({url, title, status}) => {
  return (
    <img src={url} alt={title} title={title} className={status ? 'test-image' : null} />
  )
}

export default Image