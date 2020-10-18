import React from 'react'
import Layout from '../layouts/Layout'
import Single from '../components/clinicalpsychologist/Single'

const SingleDoctor = (props) => {
  return (
    <Layout title="clinicalpsychologist Doctor">
      <Single paramsid={props.match.params.id} />
    </Layout>
  )
}

export default SingleDoctor
