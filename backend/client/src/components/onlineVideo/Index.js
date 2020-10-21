import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { base_url } from '../../common'
import axios from 'axios'
import Card from './Card'

class OnlineVideo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tutorials: [],
    }
  }
  componentDidMount() {
    axios
      .get(`${base_url}data/onlinetutorials.json`)
      .then((res) => {
        this.setState({
          tutorials: res.data.subjects,
        })
      })
      .catch((err) => console.log(err))
    window.scrollTo(0, 0)
  }
  render() {
    const { tutorials } = this.state
    return (
      <div className="online-video-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title section-title-padding text-center">
                <div className="search-online-tutorial-categories">
                  <form action="">
                    <input type="text" placeholder="Search" />
                    <button type="submit">
                      <i class="fas fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {tutorials &&
              tutorials.map((item, index) => (
                <Card tutorial={item} key={index} />
              ))}
          </div>
        </div>
      </div>
    )
  }
}

export default OnlineVideo
