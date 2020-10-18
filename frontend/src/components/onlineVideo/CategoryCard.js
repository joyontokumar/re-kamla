import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ singleList }) => {
  console.log(singleList)
  return (
    <React.Fragment>
      {singleList &&
        singleList.map((item, index) => {
          return (
            <div className="col-lg-6 col-md-6 col-sm-12" key={index}>
              <Link to={`/online-details/${item.id}`} className="topic-lists">
                <div className="title">
                  <h4>{item.title}</h4>
                </div>
                <div className="youtube-document">
                  {item.videLink ? (
                    <button className="youtube">
                      <i class="fa fa-youtube-play" aria-hidden="true"></i>
                    </button>
                  ) : item.document ? (
                    <button className="pdf">
                      <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                    </button>
                  ) : null}
                </div>
              </Link>
            </div>
          )
        })}
    </React.Fragment>
  )
}

export default CategoryCard
