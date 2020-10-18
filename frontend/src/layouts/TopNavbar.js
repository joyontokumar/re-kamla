import React from 'react'
import { Link } from 'react-router-dom'

const TopNavbar = () => {
  return (
    <div className="top-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-4">
            <div className="social-link">
              <ul>
                <li>
                  <Link to="/facebook">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/twitter">
                    {' '}
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/google-plus">
                    <i className="fab fa-google-plus"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/pinterest">
                    <i className="fab fa-pinterest"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/linkedin">
                    <i className="fab fa-linkedin"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/dribbble">
                    <i className="fab fa-dribbble"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9 col-sm-8">
            <ul className="social-address">
              <li>
                <a href="tele: +88 02-9888093">
                  {' '}
                  <i className="fas fa-phone"></i> +88 02-9888093
                </a>
              </li>
              <li>
                <a href="mailto: info@invarianttele.com">
                  {' '}
                  <i className="far fa-envelope"></i> info@invarianttele.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNavbar
