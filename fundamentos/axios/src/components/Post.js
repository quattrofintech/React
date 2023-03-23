import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// instancia 
import axios from '../axiosApi'

const Post = ({ user, post }) => {
    const navigate = useNavigate()
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

    const alterVisibilidade = () => {
        const body = {
            id: post.id,
            visivel: !post.visivel
        }
        // console.log(body)
        updatePost(body)
        // window.location.reload(true)
    }

    const updatePost = async (body) => {
        try {
            const res = await axios.put('post',
                body,
                {
                    headers: {
                        "Authorization": `Bearer ${user.auth}`
                    }
                }
            )
        } catch (error) {
            console.log(error.message)
        }
    }

    const deletePost = async () => {
        var deletar = window.confirm('Deseja realmente deletar essa publicação? Essa ação não tem volta.')
        if (!deletar)
            return
        try {
            const res = await axios.delete(`post/${post.id}`,
                {
                    headers: {
                        "Authorization": `Bearer ${user.auth}`
                    }
                }
            )
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='post'>
            <header onDoubleClick={() => navigate(`/profile/${post.userID}`)}>
                <img src={avatar} title={`Foto de perfil de ${username}`} alt={username} />
                <span className='username'>{username}</span>

                {
                    post.userID === user.id &&
                    <div className="btns">
                        <button onClick={alterVisibilidade}>{post.visivel ? 'Ocultar' : 'Ver'}</button>
                        <button onClick={deletePost}>remove</button>
                    </div>
                }
            </header>

            <p className='date'>{post.date}</p>


            <div onDoubleClick={() => navigate(`/post/${post.id}`)}>
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
            </div>

            <footer>
                <span className={`icon ${curtidas && curtidas.includes(user.id) ? 'red' : 'gray'}`} onClick={like}>
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