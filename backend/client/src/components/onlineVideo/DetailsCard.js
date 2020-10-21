import React from 'react'
import { Link } from 'react-router-dom'
import Iframe from 'react-iframe'
import ReactPlayer from 'react-player'

const DetailsCard = ({ datalists, paramsdataid }) => {

  return (
    <>
      {datalists &&
        datalists.map((single, index) => {
          return (
            <React.Fragment key={index}>
              {single.id === parseInt(paramsdataid) ? (
                  <div className="single-youtube-pdf-area section-padding">
                    <div class="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="single-online-inner-content text-center">
                                    <h3 className="title text-center pb-3">{single.title}</h3>
                                    <div className="youtube-or-pdf-area">
                                    {single.videLink ? (
                                        <div className="youtube-content">
                                           <ReactPlayer className="youtube-player" width='100%' height='500px' url={`https://www.youtube.com/watch?v=${single.videLink}`} />
                                        </div>
                                    ) : null}
                                    {single.document ? (
                                        <div className="pdf-content">
                                            <iframe src="http://localhost:3000/assets/pdf/sample.pdf" width='100%' height='500px'></iframe>
                                        </div>
                                    ) : null}
                                    </div>
                                    <div className="detail-content pt-3">
                                    <p className="text-justify">{single.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>

              ) : null}
            </React.Fragment>
          )
        })}
    </>
  )
}

export default DetailsCard
