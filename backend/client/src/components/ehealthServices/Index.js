import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//  import serice image
import img1 from '../../assets/images/services/01.png'
import img2 from '../../assets/images/services/02.png'
import img3 from '../../assets/images/services/03.png'

class EhealthServices extends Component {
  render() {
    return (
      <div className="ehealth-area section-padding section-bg relative">
        <div className="shape-design"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center section-title-padding">
                <h2>
                  Invariant{' '}
                  <span className="primary-color">eHealth Service</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="service-card-wrapper">
                <div className="service-img">
                  <div className="service-icon">
                    <i className="far fa-eye"></i>
                  </div>
                  <img src={img1} alt="" />
                </div>
                <div className="service-card-content">
                  <h3>
                    <Link to="/" top>
                      Invariant ই-রিহ্যাব প্লাটফরম সেবা
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-card-wrapper">
                <div className="service-img">
                  <div className="service-icon">
                    <i className="far fa-eye"></i>
                  </div>
                  <img src={img2} alt="" />
                </div>
                <div className="service-card-content">
                  <h3>
                    <Link to="/teams">বিশেষজ্ঞ চিকিৎসক প্যানেল</Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-card-wrapper">
                <div className="service-img">
                  <div className="service-icon">
                    <i className="far fa-eye"></i>
                  </div>
                  <img src={img3} alt="" />
                </div>
                <div className="service-card-content">
                  <h3>
                    <Link to="/help-desk">
                      নিজেকে সনাক্ত <br /> করুন
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-card-wrapper">
                <div className="service-img">
                  <div className="service-icon">
                    <i className="far fa-eye"></i>
                  </div>
                  <img src={img3} alt="" />
                </div>
                <div className="service-card-content">
                  <h3>
                    <Link to="/protibondi-lists">
                      প্রতিবন্ধীদের জন্য চিকিৎসা সেবার তালিকা
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default EhealthServices
