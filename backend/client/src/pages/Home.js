import React, { Component } from 'react'
import EhealthServices from '../components/ehealthServices/Index'
import OnlineRegisteration from '../components/onlineRegisteration/Index'
import EventRegisteration from '../components/eventRegisteration/Index'
import OnlineTutorials from '../components/onlineTutorials/Index'
import SliderAnimation from '../components/bannerSlider/Slider'
import Layout from '../layouts/Layout'

class Home extends Component {
  render() {
    return (
      <Layout>
        <SliderAnimation />
        <EhealthServices />
        <OnlineRegisteration />
        <EventRegisteration />
        <OnlineTutorials />
      </Layout>
    )
  }
}
export default Home
