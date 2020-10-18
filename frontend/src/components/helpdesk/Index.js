import React, { Component } from 'react'
import Chatbot from 'react-chatbot-kit'
import ActionProvider from '../../utils/ActionProvider'
import MessageParser from '../../utils/MessageParser'
import config from '../../utils/config'

class HelpDesk extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="helpdesk-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="helpdesk-wrapper-content">
                {/* <div className="header-top-help-desk">
                  <h4>Invariant E-Health</h4>
                  <p>Start the conversation</p>
                </div> */}
                <div className="help-desk-inner-content">
                  <div className="single-chat">
                    {/* <div className="time">
                      <span>10:20</span>
                    </div> */}
                    <div className="text-content">
                      {/* <p>
                        Hey! This is not the first time you are here. What would
                        you like to do?
                      </p>
                      <span>CHOOSE AN OPTION</span>
                      <div className="button-content">
                        <button className="theme-btn">START AGAIN</button>
                        <button className="theme-btn">CONTINUE</button>
                      </div> */}
                    </div>
                    <Chatbot
                      config={config}
                      actionProvider={ActionProvider}
                      messageParser={MessageParser}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default HelpDesk
