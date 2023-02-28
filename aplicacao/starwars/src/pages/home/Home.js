import React, { useEffect, useState } from 'react'


//Components
import Card from '../../components/card/Card'

const Home = () => {
    const url = 'https://swapi.dev/api/'
    const [people, setPeople] = useState([])

    useEffect(() => {
        const http = async () => {
            try{
                const response = await fetch(`${url}/people`)
                const data = await response.json()
                console.log(data)
                setPeople(data.results)
            }catch(error){
                console.log('Error: ' + error.message)
            }
        }
        http()
    }, [])

    const returnText = () => {
        return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti corporis laborum, ipsam eius consequuntur inventore mollitia saepe, quam totam ipsa cupiditate asperiores harum vel veniam dicta, nesciunt reiciendis natus exercitationem?"
    }
    return (
        <main>
            <section className="card-slider">
                {
                    people.map((item, i) => (
                        <Card key={`${item.name}${i}`} titulo={item.name} subTitulo={item.homeworld} url={item.url} texto={returnText()}/>
                    ))
                }
            </section>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quaerat iste laudantium corporis error eum hic aperiam, ea perferendis deleniti delectus in, dolore blanditiis commodi quidem neque eveniet magni molestias?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, nobis. Dolorem unde maiores, eveniet consequatur facere debitis pariatur quos excepturi dolores sequi laborum similique repudiandae? Animi illo tempore accusantium dignissimos.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa pariatur dicta ullam tenetur! Porro, maxime soluta? Sequi modi repellat in cum adipisci, incidunt omnis beatae blanditiis, ratione deserunt itaque nobis.</p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa et harum vero repudiandae velit, minus quam dolores? Modi magnam laboriosam commodi odit, obcaecati, numquam, quibusdam quasi reprehenderit aperiam culpa alias.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, atque. Voluptate sit fugit voluptatum itaque perferendis in odio vitae excepturi quis! Sunt tempora dolores recusandae, quae saepe culpa iusto facilis.
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae enim nostrum, quae consequuntur similique iste dolores fuga ex voluptate perspiciatis adipisci odio reiciendis voluptates nihil. Eos quasi laborum ab quisquam.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur obcaecati quasi qui ab eos, distinctio fugit voluptatibus accusantium, vitae inventore mollitia aperiam quos est, maiores iure atque velit dignissimos ut. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum molestias odit optio totam impedit eos, ipsa, aliquid cupiditate quasi explicabo nobis modi repudiandae in debitis ducimus voluptas veritatis. Eligendi, delectus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim illum sint quis. Expedita non velit modi molestias dolore. Officiis suscipit optio soluta sequi sunt, eius ea fuga esse. Laborum, tenetur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure magnam blanditiis saepe quae qui deleniti, iste quis cupiditate minus est molestiae necessitatibus, laboriosam cumque veniam quod suscipit non aliquid hic!Lorem
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quaerat iste laudantium corporis error eum hic aperiam, ea perferendis deleniti delectus in, dolore blanditiis commodi quidem neque eveniet magni molestias?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, nobis. Dolorem unde maiores, eveniet consequatur facere debitis pariatur quos excepturi dolores sequi laborum similique repudiandae? Animi illo tempore accusantium dignissimos.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa pariatur dicta ullam tenetur! Porro, maxime soluta? Sequi modi repellat in cum adipisci, incidunt omnis beatae blanditiis, ratione deserunt itaque nobis.</p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa et harum vero repudiandae velit, minus quam dolores? Modi magnam laboriosam commodi odit, obcaecati, numquam, quibusdam quasi reprehenderit aperiam culpa alias.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, atque. Voluptate sit fugit voluptatum itaque perferendis in odio vitae excepturi quis! Sunt tempora dolores recusandae, quae saepe culpa iusto facilis.
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae enim nostrum, quae consequuntur similique iste dolores fuga ex voluptate perspiciatis adipisci odio reiciendis voluptates nihil. Eos quasi laborum ab quisquam.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur obcaecati quasi qui ab eos, distinctio fugit voluptatibus accusantium, vitae inventore mollitia aperiam quos est, maiores iure atque velit dignissimos ut. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum molestias odit optio totam impedit eos, ipsa, aliquid cupiditate quasi explicabo nobis modi repudiandae in debitis ducimus voluptas veritatis. Eligendi, delectus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim illum sint quis. Expedita non velit modi molestias dolore. Officiis suscipit optio soluta sequi sunt, eius ea fuga esse. Laborum, tenetur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure magnam blanditiis saepe quae qui deleniti, iste quis cupiditate minus est molestiae necessitatibus, laboriosam cumque veniam quod suscipit non aliquid hic!Lorem
            </p>
        </main>
    )
}

export default Home