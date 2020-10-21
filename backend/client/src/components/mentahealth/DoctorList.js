import React, { Component } from 'react'
import { base_url } from '../../common'
import axios from 'axios'
import DorctorSingleCard from './Card'
class DoctorList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doctors: [],
    }
  }
  componentDidMount() {
    axios
      .get(`${base_url}data/mentalhealthdoctors.json`)
      .then((res) => {
        this.setState({
          doctors: res.data.doctors,
        })
      })
      .catch((err) => console.log(err))
  }
  render() {
    const { doctors } = this.state
    return (
      <div className="mental-health-doctor-lists section-padding">
        <div className="container">
          <div className="row">
            {doctors &&
              doctors.map((singledoctor, index) => {
                return (
                  <DorctorSingleCard doctordata={singledoctor} key={index} />
                )
              })}
          </div>
        </div>
      </div>
    )
  }
}
export default DoctorList
