import React from 'react'

// Hooks
import { useAxios } from '../hooks/useAxios'

//Components
import Post from '../components/Post'
import { useParams } from 'react-router-dom'

const Profile = ({ user }) => {
    const { userID } = useParams()
    const { data, isLoading, error } = useAxios({ url: `posts/user/${userID}`, method: 'get' })
    const posts = data.hasOwnProperty('data') ? data.data.results : []
    console.log(posts[0])
    const myProfile = Number(userID) === user.id ? true : false

    return (
        <main>
            {
                myProfile
                    ?
                        <h1>Meu Perfil</h1>
                    :
                        <h1>
                            {
                                posts[0] &&
                                posts[0].username
                            }
                        </h1>
            }
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
                        !myProfile && !item.visivel
                            ?
                                null
                            :
                                <Post key={item.id} user={user} post={item} />
                    ))
                }
            </article>
        </main>
    )
}

export default Profile