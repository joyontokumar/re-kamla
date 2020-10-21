import React from 'react'

const Education = () => {
  return (
    <div className="educational-background-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title section-title-padding text-center">
              <h2 className="text-white">
                Education <span className="secondary-color">Background</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row row-reverse">
          <div className="col-lg-12">
            <div className="time-line-wrapper">
              <div className="single-time-line single-education-time-line">
                <div className="info-title">
                  <h4 className="white-color">
                    Perkins School for the Blind, Boston, USA
                  </h4>
                  <h5 className="white-color">2020</h5>
                </div>
                <div className="time-line-inner-description">
                  <p className="white-color">
                    Educational Leadership on Special Ed. of Visual Impairment,
                    Deaf-Blind and MDVI (Multiple Disabilities with Visual
                    Impairment)
                  </p>
                </div>
              </div>
            </div>
            <div className="time-line-wrapper">
              <div className="single-time-line single-education-time-line">
                <div className="info-title">
                  <h4 className="white-color">National University</h4>
                  <h5 className="white-color">2020</h5>
                </div>
                <div className="time-line-inner-description">
                  <p className="white-color">
                    Special Ed. in the area of Intellectual Disability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
