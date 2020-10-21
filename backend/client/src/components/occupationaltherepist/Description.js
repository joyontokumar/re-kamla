import React from 'react'
import { Link } from 'react-router-dom'
// import images
import avater from '../../assets/images/profile/avater.png'
const Description = ({ details }) => {
  return (
    <div className="doctor-description-area section-padding">
      <div className="container">
        <div className="row row-center">
          <div className="col-lg-6">
            <div className="doctor-profile-wrapper">
              <img src={details.avatar} alt="doctor avater" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="doctor-introduction">
              <h2 className="doctor-name">{details.name}</h2>
              <h3 className="doctor-designation">{details.designation}</h3>
              <p>{details.description}</p>
              <div className="doctor-social-link mt-30">
                <ul>
                  <li>
                    <Link to="/">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fab fa-pinterest"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fab fa-whatsapp"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
