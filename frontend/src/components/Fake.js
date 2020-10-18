import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMember } from '../redux/teams/teamActions'

class Fake extends Component {
  componentWillMount() {
    console.log(this.props.fetchMember())
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="wrapper-content"></div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({ teamReducer: state.teamReducer })
export default connect(mapStateToProps, { fetchMember })(Fake)
