import React from 'react'
import Layout from '../layouts/Layout'
import Single from '../components/mentahealth/Single'

const SingleDoctor = (props) => {
  return (
    <Layout title="SINGLE DOCTOR">
      <Single paramsid={props.match.params.id} />
    </Layout>
  )
}

export default SingleDoctor
