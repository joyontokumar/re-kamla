import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EventRegisteration extends Component {
  render() {
    return (
      <section className="online-event-registeration">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="online-event-form">
                <div className="section-title text-center section-title-padding">
                  <h2>
                    অনলাইন ইভেন্ট{' '}
                    <span className="primary-color">রেজিস্ট্রেশন</span>
                  </h2>
                </div>
                <form action="">
                  <div className="event-form-group">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="form-control event-input-field"
                      required
                    />
                  </div>
                  <div className="event-form-group">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="form-control event-input-field"
                      required
                    />
                  </div>
                  <div className="event-form-group">
                    <input
                      type="text"
                      placeholder="Enter your phone"
                      className="form-control event-input-field"
                      required
                    />
                  </div>
                  <div className="event-form-group">
                    <input
                      type="text"
                      placeholder="Enter your address"
                      className="form-control event-input-field"
                    />
                  </div>
                  <div className="event-form-group">
                    <input
                      type="submit"
                      value="Send Message"
                      className="theme-btn w-100"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="online-event-content">
                <h3>
                  Introducing <br /> Live event for persons with disability
                </h3>
                <p>
                  First time in Bangladesh we are create live event in online
                  for persons with disabilities and their community. If you want
                  to join please registration for event. We will notfify all
                  event when we start.
                </p>
                <Link to="" className="theme-btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default EventRegisteration
