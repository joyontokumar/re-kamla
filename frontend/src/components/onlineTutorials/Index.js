import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import VideoModal from './VideoModal'

// image import
import img1 from '../../assets/images/modal.jpeg'

class OnlineTutorials extends Component {
  render() {
    return (
      <section className="online-tutorials section-padding-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center section-title-padding">
                <h2>
                  অনলাইন{' '}
                  <span className="primary-color">
                    প্রতিবন্ধিতা বিষয়ক টিউটোরিয়াল
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <img src={img1} alt="" />
              <VideoModal />
            </div>
            <div className="col-lg-6">
              <div className="online-tutorials-content">
                <h3>
                  Introducing <br />
                  Live event for persons with disability
                </h3>
                <p>
                  First time in Bangladesh we are create live event in online
                  for persons with disabilities and their community. If you want
                  to join please registration for event. We will notfify all
                  event when we start.
                </p>
                <Link to="/online-contents" className="theme-btn">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default OnlineTutorials
