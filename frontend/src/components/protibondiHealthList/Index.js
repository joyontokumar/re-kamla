import React, { Component } from 'react'
import {base_url } from  '../../common.js'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Card from './Card'

class ProtiBondiList extends Component {
constructor(props) {
    super(props)
    this.state = {
      healthItems: [],
    }
  }
  componentDidMount() {
    axios
      .get(`${base_url}data/protibondilists.json`)
      .then((res) => {
        this.setState({
          healthItems: res.data.healthlists,
        })
      })
      .catch((err) => console.log(err))
  }
  render() {
    const { healthItems } = this.state
    console.log(healthItems)
    return (
      <div className="protibondi-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center section-title-padding">
                <h2>
                  প্রতিবন্ধীদের <span className="primary-color"> সেবার তালিকা</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
          {healthItems && healthItems.map((item, index)=> <Card lists={item} key={index} />)}
          </div>
        </div>
      </div>
    )
  }
}
export default ProtiBondiList
