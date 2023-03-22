import React, { useState } from 'react'

// instancia 
import axios from '../axiosApi'

const Post = ({ user, post }) => {
    const username = post.username || 'desconhecido'
    const avatar = post.avatar || 'https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg'

    const [curtidas, setCurtidas] = useState(post.curtidas)

    const like = () => {
        let array = []
        if (curtidas.includes(user.id)) {
            array = curtidas.filter((item) => item !== user.id)
        } else {
            array = [...curtidas, user.id]
        }
        setCurtidas(array)

        const body = {
            id: post.id,
            curtidas: array
        }

        updatePost(body)
    }

    const updatePost = async (body) => {
        try{
            const res = await axios.put('post',
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
    }

    return (
        <div className='post'>
            <header>
                <img src={avatar} title={`Foto de perfil de ${username}`} alt={username} />
                <span className='username'>{username}</span>

                {
                    post.userID === user.id &&
                    <div className="btns">
                        <button>visibilidade</button>
                        <button>remove</button>
                    </div>
                }
            </header>

            <p className='date'>{post.date}</p>

            {
                post.image &&
                <div className="img">
                    <img src={post.image} />
                </div>
            }

            {
                post.text &&
                <div className="text">
                    <p>
                        {post.text}
                    </p>
                </div>
            }

            <footer>
                <span className={`icon ${curtidas.includes(user.id) ? 'red' : 'gray'}`} onClick={like}>
                    ❤️
                </span>
                <span className="likes" onClick={like}>
                    {
                        curtidas &&
                        curtidas.length
                    }
                </span>
            </footer>
        </div>
    )
}

export default Post