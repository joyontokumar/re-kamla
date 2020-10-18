import React, { Component } from 'react'
// import images
import img1 from '../../assets/images/teams/1.png'
import img2 from '../../assets/images/teams/2.png'
import img3 from '../../assets/images/teams/10.png'
import img4 from '../../assets/images/teams/11.png'
import img5 from '../../assets/images/teams/5.png'
import img6 from '../../assets/images/teams/6.png'
import img7 from '../../assets/images/teams/7.png'
import img8 from '../../assets/images/teams/8.png'
import img9 from '../../assets/images/teams/10.png'

class TeamMembers extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <section className="team-member-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center section-title-padding">
                <h2>
                  Our Special{' '}
                  <span className="primary-color"> Team Members</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="team-member-content">
                <img src={img1} alt="" />
                <div className="team-member-info">
                  <h4 className="member-name">Ahin Xian</h4>
                  <h6 className="designation">Physiotherapy</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-member-content">
                <img src={img2} alt="" />
                <div className="team-member-info">
                  <h4 className="member-name">Ahin Xian</h4>
                  <h6 className="designation">Physiotherapy</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-member-content">
                <img src={img3} alt="" />
                <div className="team-member-info">
                  <h4 className="member-name">Ahin Xian</h4>
                  <h6 className="designation">Physiotherapy</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-member-content">
                <img src={img4} alt="" />
                <div className="team-member-info">
                  <h4 className="member-name">Ahin Xian</h4>
                  <h6 className="designation">Physiotherapy</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-member-content">
                <img src={img5} alt="" />
                <div className="team-member-info">
                  <h4 className="member-name">Ahin Xian</h4>
                  <h6 className="designation">Physiotherapy</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-member-content">
                <img src={img6} alt="" />
                <div className="team-member-info">
                  <h4 className="member-name">Ahin Xian</h4>
                  <h6 className="designation">Physiotherapy</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-member-content">
                <img src={img7} alt="" />
                <div className="team-member-info">
                  <h4 className="member-name">Ahin Xian</h4>
                  <h6 className="designation">Physiotherapy</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-member-content">
                <img src={img8} alt="" />
                <div className="team-member-info">
                  <h4 className="member-name">Ahin Xian</h4>
                  <h6 className="designation">Physiotherapy</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-member-content">
                <img src={img9} alt="" />
                <div className="team-member-info">
                  <h4 className="member-name">Ahin Xian</h4>
                  <h6 className="designation">Physiotherapy</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default TeamMembers
