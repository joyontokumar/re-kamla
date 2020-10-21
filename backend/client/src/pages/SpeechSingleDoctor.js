import React from 'react'
import Layout from '../layouts/Layout'
import Single from '../components/speechlanguagetherapy/Single'

const SingleDoctor = (props) => {
  return (
    <Layout title="SPEECH DOCTOR">
      <Single paramsid={props.match.params.id} />
    </Layout>
  )
}

export default SingleDoctor
