import React from 'react'
import Layout from '../layouts/Layout'
import Single from '../components/occupationaltherepist/Single'

const OccupationalSingleDoctor = (props) => {
  return (
    <Layout title="OCCUPATIONAL THERAPIST">
      <Single paramsid={props.match.params.id} />
    </Layout>
  )
}

export default OccupationalSingleDoctor
