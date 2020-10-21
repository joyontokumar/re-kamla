import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ tutorial }) => {
  return (
    <div className="col-lg-3">
      <Link
        to={`/online-categories/${tutorial.id}`}
        className="online-video-list"
      >
        <img src={tutorial.img} alt="" />
        <h4>{tutorial.name}</h4>
        <i class="fas fa-chevron-down"></i>
      </Link>
    </div>
  )
}

export default Card
