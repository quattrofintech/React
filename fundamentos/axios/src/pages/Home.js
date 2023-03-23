import './index.css'
import React from 'react'

// Hooks
import { useAxios } from '../hooks/useAxios'

//Components
import Post from '../components/Post'
import Postar from '../components/Postar'

const Home = ({user}) => {
    const { data, isLoading, error } = useAxios({ url: 'posts', method: 'get' })
    const posts = data.hasOwnProperty('data') ? data.data.results : []
    console.log(posts)
    return (
        <main>
            <Postar user={user} />
            <article>
                {
                    isLoading &&
                    <div>
                        Loading . . .
                    </div>
                }
                {
                    posts &&
                    posts.map((item) => (
                        <Post key={item.id} user={user} post={item} />
                    ))
                }
            </article>
        </main>
    )
}

export default Home