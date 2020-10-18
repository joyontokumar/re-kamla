import React from 'react'
import Layout from '../layouts/Layout'
import Details from '../components/onlineVideo/Details'

const OnlineDetails = (props) => {
  return (
    <Layout title="ONLINE DETAILS">
      <Details paramsid={props.match.params.id} />
    </Layout>
  )
}

export default OnlineDetails
