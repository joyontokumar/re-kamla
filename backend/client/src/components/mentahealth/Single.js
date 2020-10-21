import React, { Component } from 'react'
import { base_url } from '../../common'
import axios from 'axios'
import Description from './Description'
import Education from './Education'
import Experience from './Experience'
class SingleDoctor extends Component {
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
      <>
        {doctors &&
          doctors
            .filter((doctor) => {
              return doctor.id === parseInt(this.props.paramsid)
            })
            .map((item, index) => (
              <React.Fragment key={index}>
                <Description details={item} />
                <Education education={item.education} />
                <Experience experiences={item.experiences} />
              </React.Fragment>
            ))}
      </>
    )
  }
}
export default SingleDoctor
