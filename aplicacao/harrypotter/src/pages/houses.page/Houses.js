import './index.css'
import React from 'react'

const Houses = () => {
  return (
    <div className='houses'>
        <div className="card-house">
            <a href="/house/gryffindor" >
                <img src="https://i0.wp.com/blogthatmustnotbenamed.com/wp-content/uploads/2021/02/gryfindor-hogwarts-house.jpg?fit=1800%2C945&ssl=1" alt="" />
            </a>
            <a href="/house/slytherin">
                <img src="https://i0.wp.com/blogthatmustnotbenamed.com/wp-content/uploads/2021/02/slytherin-hogwarts-house.jpg?fit=1800%2C945&ssl=1" alt="" />
            </a>
            <a href="/house/hufflepuff">
                <img src="https://i0.wp.com/blogthatmustnotbenamed.com/wp-content/uploads/2021/02/hufflepuff-hogwarts-house-1.jpg?fit=1800%2C945&ssl=1" alt="" />
            </a>
            <a href="/house/ravenclaw">
                <img src="https://i0.wp.com/blogthatmustnotbenamed.com/wp-content/uploads/2021/02/ravenclaw-hogwarts-house.jpg?fit=1800%2C945&ssl=1" alt="" />
            </a>
        </div>
        
    </div>
  )
}

export default Houses