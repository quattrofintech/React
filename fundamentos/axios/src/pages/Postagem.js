import React from 'react'

// Hooks
import { useAxios } from '../hooks/useAxios'

//Components
import Post from '../components/Post'
import { useParams } from 'react-router-dom'

const Postagem = ({user}) => {
    const { id } = useParams()
    const { data, isLoading, error } = useAxios({ url: `post/${id}`, method: 'get' })
    const post = data.hasOwnProperty('data') ? data.data.results : {}
    console.log(post)
    return (
        <main>
            <article>
                {
                    isLoading &&
                    <div>
                        Loading . . .
                    </div>
                }
                {
                    post &&
                        <Post key={post.id} user={user} post={post} />
                }
            </article>
        </main>
  )
}

export default Postagem