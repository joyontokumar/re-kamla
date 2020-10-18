import React from 'react'
import { Link } from 'react-router-dom'
// import images
import avater from '../../assets/images/profile/mdvi.png'
const Description = () => {
  return (
    <div className="doctor-description-area section-padding">
      <div className="container">
        <div className="row row-center">
          <div className="col-lg-6">
            <div className="doctor-profile-wrapper">
              <img src={avater} alt="doctor avater" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="doctor-introduction">
              <h2 className="doctor-name">Rabeya Yeasmin Neela</h2>
              <h3 className="doctor-designation">
                Special Ed. of Visual Impairment, Deaf-Blind and MDVI (Multiple
                Disabilities with Visual Impairment)
              </h3>
              <p>
                Intend to work in a challenging field of Special Education world
                showing a strong sense of responsibility, the dignity of works
                with children and youth with special needs, especially children
                and youth with Intellectual Delay, Cerebral Palsy, Visually
                Impairment, Hearing Impairment, Deaf-Blind and children with
                MDVI (Multiple Disabilities with Visual Impairment) to develop
                their fullest potentials with my hard work, respect, sincerity
                and devotion for building a bright career and developing the
                organization.
              </p>
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
