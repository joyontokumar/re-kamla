import React, { Component } from 'react'
import { base_url } from '../../common'
import axios from 'axios'
import CategoryCard from './CategoryCard'

class SingleCategory extends Component {
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
  }
  render() {
    const { lists } = this.state
    return (
      <div className="category-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title section-title-padding text-center">
                <h2>
                  <span className="primary-color">Topics</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <>
              {lists &&
                lists
                  .filter((list) => {
                    return list.id === parseInt(this.props.paramsid)
                  })
                  .map((singleItem, index) => (
                    <React.Fragment key={index}>
                      <CategoryCard singleList={singleItem.items} />
                    </React.Fragment>
                  ))}
            </>
          </div>
        </div>
      </div>
    )
  }
}
export default SingleCategory
