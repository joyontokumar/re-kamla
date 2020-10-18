import React from 'react'

const Education = ({ education }) => {
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
            {education &&
              education.map((edu, index) => (
                <div className="time-line-wrapper" key={index}>
                  <div className="single-time-line single-education-time-line">
                    <div className="info-title">
                      <h4 className="white-color">{edu.university}</h4>
                      <h5 className="white-color">{edu.years}</h5>
                    </div>
                    <div className="time-line-inner-description">
                      <p className="white-color">{edu.subject}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
