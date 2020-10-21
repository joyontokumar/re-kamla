// import package and project file
import React, { Component } from 'react'
import ModalVideo from 'react-modal-video'
import 'font-awesome/css/font-awesome.min.css'
// import "../../assets/css/modal-video.min.css";
import '../../../node_modules/react-modal-video/css/modal-video.min.css'

class VideoModal extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({ isOpen: true })
  }

  render() {
    return (
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="kqKx8K-50E0"
          onClose={() => this.setState({ isOpen: false })}
        />
        <button className="video-btn" onClick={this.openModal}>
          <i className="fa fa-play"></i>
        </button>
      </React.Fragment>
    )
  }
}

export default VideoModal
