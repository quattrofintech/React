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
        </main>
    )
}

export default Home