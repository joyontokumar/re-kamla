import React from 'react'

const Experience = ({ experiences }) => {
  return (
    <div className="exprience-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center section-title-padding">
              <h2>
                Skill & <span className="primary-color">Experience</span>{' '}
              </h2>
            </div>
          </div>
        </div>
        <div className="row row-reverse">
          <div className="col-lg-12">
            {experiences &&
              experiences.map((exp, index) => (
                <div className="time-line-wrapper" key={index}>
                  <div className="single-time-line single-experience-time-line">
                    <div className="info-title">
                      <h4 className="white-color">{exp.skillname}</h4>

                      <h5 className="white-color">{exp.years}</h5>
                    </div>
                    <div className="time-line-inner-description">
                      <p className="white-color">{exp.description}</p>
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

export default Experience
