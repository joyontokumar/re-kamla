import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import footerLogo from '../assets/images/footerLogo.png'

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="section-padding footer-area">
          <div className="container">
            <div className="row mb-30">
              <div className="col-lg-4 col-sm-12">
                <div className="footer-wrapper">
                  <div className="footer-logo mb-30">
                    <img src={footerLogo} alt="Re-Health" />
                  </div>
                  <p>
                    Invariant E-Health: A new initiatives <br /> in the
                    disability sector
                  </p>
                  <div className="subscription mt-30">
                    <form action="">
                      <div className="form-group newsletter-form-group">
                        <input
                          type="text"
                          className="newsletter-input-field"
                          placeholder="E-mail"
                        />
                        <button type="submit" className="newsletter-btn">
                          <i className="fas fa-caret-right"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-sm-12">
                <div className="information text-center">
                  <div className="information-content">
                    <h4 className="text-white mb-20">Get in Touch</h4>
                    <h6 className="mb-20">Invariant</h6>
                    <div className="single-information d-flex">
                      <div className="icon">
                        <span className="theme-color">A</span>
                      </div>
                      <div className="info">
                        <span>
                          43 Mohakhali C/A Aqua Tower (Level-3 & 8)
                          <br />
                          Dhaka-1212, Bangladesh
                        </span>
                      </div>
                    </div>
                    <div className="single-information d-flex">
                      <div className="icon">
                        <span className="theme-color">E</span>
                      </div>
                      <div className="info">
                        <span>
                          <Link
                            to="mailto:info@invariant-bd.org"
                            className="light-color"
                          >
                            info@invarianttele.com
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright-text text-center">
                  <p>
                    &copy; 2020{' '}
                    <Link
                      to="/"
                      className="light-color"
                      style={{ fontWeight: 600 }}
                    >
                      Invariant
                    </Link>{' '}
                    . All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    )
  }
}
export default Footer
