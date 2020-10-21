import React, { Component } from 'react'
import { base_url } from '../../common'
import axios from 'axios'
import DetailsCard from './DetailsCard'

class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: [],
    }
  }
  componentDidMount() {
    axios
      .get(`${base_url}data/onlinetutorials.json`)
      .then((res) => {
        this.setState({
          lists: res.data.subjects,
        })
      })
      .catch((err) => console.log(err))
    // window top
    window.scrollTo(0, 0)
  
  }
  render() {
    const { lists } = this.state
    return (
      <>
              {lists &&
                lists
                  .filter((list) => {
                    return list.id === parseInt(this.props.paramsid)
                  })
                  .map((item, index) => (
                    <React.Fragment key={index}>
                      <DetailsCard
                        datalists={item.items}
                        paramsdataid={this.props.paramsid}
                      />
                    </React.Fragment>
                  ))}
          </>
    )
  }
}
export default Details
