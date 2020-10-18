import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Card = (props) => {
  const { name, designation, avatar, id } = props.doctordata
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card-block-style mental-health-doctor-list mb-30">
          <Link
            to={`${process.env.PUBLIC_URL}/mental-doctor/${id}`}
            className="card-block-link"
          >
            <div className="doctor-image-inner">
              <img src={avatar} alt="doctor" />
            </div>
            <div className="card-style-inner-content">
              <h4 className="doctor-name">{name}</h4>
              <h5 className="doctor-designation">{designation}</h5>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
Card.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  designation: PropTypes.string,
}

export default Card
