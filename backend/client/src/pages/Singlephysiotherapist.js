import React from 'react'
import Layout from '../layouts/Layout'

import Single from '../components/physiotherapist/Single'

const Singlephysiotherapist = (props) => {
  return (
    <Layout title="Single Physiotherapist">
      <Single paramsid={props.match.params.id} />
    </Layout>
  )
}

export default Singlephysiotherapist
