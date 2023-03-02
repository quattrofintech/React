import React, { useEffect, useState } from 'react'


//Components
import Card from '../../components/card/Card'

const Home = () => {
    const url = 'https://swapi.dev/api/'
    const [people, setPeople] = useState([])
    const [planets, setPlanets] = useState([])
    const [starships, setStarships] = useState([])

    useEffect(() => {
        const request = async () => {
            setPeople(await httpRequest(`${url}/people`))
            setPlanets(await httpRequest(`${url}/planets`))
            setStarships(await httpRequest(`${url}/starships`))
        }
        request()
    }, [])

    const httpRequest = async (url) => {
        try{
            const response = await fetch(url)
            const data = await response.json()
            return data.results
        }catch(error){
            console.log('Error: ' + error.message)
        }
    }

    const returnText = () => {
        return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti corporis laborum, ipsam eius consequuntur inventore mollitia saepe, quam totam ipsa cupiditate asperiores harum vel veniam dicta, nesciunt reiciendis natus exercitationem?"
    }


    return (
        <main>
            <div style={{display: 'flex', width: '70%', justifyContent: 'space-between', alignItems: 'center', margin: 'auto'}}>
                <h1>
                    Personagens
                </h1>
                <a href="/people" style={{textTransform: 'uppercase', cursor: 'pointer'}}> mais personagens</a>
            </div>
            <section className="card-slider">
                {
                    people &&
                    people.map((item, i) => (
                        <Card key={`${item.name}${i}`} titulo={item.name} subTitulo={item.homeworld} url={item.url} status={true} endpoint='person' texto={returnText()}/>
                    ))
                }
            </section>

            <div style={{display: 'flex', width: '70%', justifyContent: 'space-between', alignItems: 'center', margin: 'auto'}}>
                <h1>
                    Planetas
                </h1>
                <a href="/planets" style={{textTransform: 'uppercase', cursor: 'pointer'}}> mais planetas</a>
            </div>
            <section className="card-slider">
                {
                    planets &&
                    planets.map((item, i) => (
                        <Card key={`${item.name}${i}`} titulo={item.name} subTitulo={item.homeworld} url={item.url} status={true}  endpoint='planet' texto={returnText()}/>
                    ))
                }
            </section>

            <div style={{display: 'flex', width: '70%', justifyContent: 'space-between', alignItems: 'center', margin: 'auto'}}>
                <h1>
                    Naves
                </h1>
                <a href="/starships" style={{textTransform: 'uppercase', cursor: 'pointer'}}> mais naves</a>
            </div>
            <section className="card-slider">
                {
                    starships &&
                    starships.map((item, i) => (
                        <Card key={`${item.name}${i}`} titulo={item.name} subTitulo={item.homeworld} url={item.url} status={true} endpoint='starship' texto={returnText()}/>
                    ))
                }
            </section>
        </main>
    )
}

export default Home