import React, { useState } from 'react'

// instancia
import axios from '../axiosApi'

const Postar = ({ user }) => {
  const [urlImage, setUrlImage] = useState('')
  const [text, setText] = useState('')
  const textLen = text.length

  const createPost = (e) => {
    e.preventDefault()
    if (!urlImage && !text)
      return

    const body = {
      userID: user.id,
      username: user.username,
      avatar: user.avatar,
      image: urlImage.trim(),
      text: text.trim(),
      curtidas: [],
      visivel: true,
      date: new Date()
    }
    
    postRequest(body)

    limparCampos()
  }

  const postRequest = async (body) => {
    try{
      const res = await axios.post('post',
        body,
        {
          headers : {
              "Authorization" : `Bearer ${user.auth}`
          }
        }
      )
    }catch(error) {
      console.log(error.message)
    }

    window.location.reload(true)
  }

  const limparCampos = () => {
    setUrlImage('')
    setText('')
  }

  return (
    <section className='postar'>
      <form onSubmit={createPost}>
        <div>
          <input
            type="url"
            placeholder='Url da imagem'
            value={urlImage}
            onChange={(e) => setUrlImage(e.target.value)}
          />
        </div>
        <div>
          <textarea
            rows="5"
            placeholder='O que você está pensando agora . . .'
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <p>{textLen}</p>
        </div>
        <div>
          <button type='submit'>Enviar</button>
        </div>
      </form>
    </section>
  )
}

export default Postar