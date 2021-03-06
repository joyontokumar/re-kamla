import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const MainMenu = () => {
  const [scrolled, setScrolled] = React.useState(false)
  const [faculties, setFaculties] = useState([]);
  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 200) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  // get faculty category data from database
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('http://localhost:5050/api/faculty');
        setFaculties(data);
      } catch (error) {
        console.log(error)
      }
    })()
  }, []);
  // window scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  let x = ['navbar navbar-expand-lg header-area no-padding navbar-light']
  if (scrolled) {
    x.push('scrolled')
  }
  return (
    <nav className={x.join(' ')}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="re-health"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navtogglerItemItem"
          aria-controls="navtogglerItemItem"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navtogglerItemItem">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0" id="main-menu">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/help-desk">
                Helpdesk
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/doctors">
                Doctor Profile <i className="fas fa-angle-down"></i>
              </Link>
              <ul className="dropdown">
                {faculties && faculties.map((faculty, index)=>(

                  <li key={index}>
                    <Link to="/mental-health">{faculty.name}</Link>
                  </li>

                ))}

                {/* <li>
                  <Link to="/speech-language-therapy">
                    Speech & Language Therapy
                  </Link>
                </li>
                <li>
                  <Link to="/occupational-therepist">
                    Occupational Therepist
                  </Link>
                </li>
                <li>
                  <Link to="/clinical-psychologist">Clinical Psychologist</Link>
                </li>
                <li>
                  <Link to="/physiotherapist">Physiotherapist</Link>
                </li>
                <li>
                  <Link to="/teams">Team Member</Link>
                </li> */}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default MainMenu
