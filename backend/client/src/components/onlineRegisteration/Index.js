import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// image import
import img1 from '../../assets/images/doctor.png'

class OnlineRegisteration extends Component {
  render() {
    return (
      <div className="onlineregisteration-area section-padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="online-registeration-wrapper">
                <div className="online-registeraion-info">
                  <div className="online-form-img">
                    <img src={img1} alt="" />
                  </div>
                </div>
                <div className="online-form">
                  <div className="section-title mb-30">
                    <h2>
                      অনলাইন <span className="primary-color">রেজিস্ট্রেশন</span>
                    </h2>
                  </div>
                  <form action="">
                    <div className="sinle-input-field">
                      <label htmlFor="name">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        className="form-control"
                      />
                    </div>
                    <div className="sinle-input-field">
                      <label htmlFor="age">Age</label>
                      <input
                        id="age"
                        type="number"
                        name="age"
                        placeholder="Enter Your Age"
                        className="form-control"
                      />
                    </div>
                    <div className="sinle-input-field">
                      <label htmlFor="number">Phone Number</label>
                      <input
                        id="number"
                        type="text"
                        name="phone"
                        placeholder="Enter Your Phone Number"
                        className="form-control"
                      />
                    </div>
                    <div className="sinle-input-field">
                      <label htmlFor="address">Address</label>
                      <input
                        id="address"
                        type="text"
                        name="address"
                        placeholder="Enter Your Address"
                        className="form-control"
                      />
                    </div>
                    <div className="sinle-input-field">
                      <label>Male or Female :</label>
                      <div class="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          class="custom-control-input"
                          name="customRadio"
                          id="male"
                        />
                        <label class="custom-control-label" for="male">
                          Male
                        </label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          class="custom-control-input"
                          name="customRadio"
                          id="female"
                        />
                        <label class="custom-control-label" for="female">
                          Female
                        </label>
                      </div>
                    </div>

                    <input
                      type="submit"
                      value="Submit"
                      className="theme-btn w-100 mt-2"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default OnlineRegisteration
