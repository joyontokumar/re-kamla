import React from 'react'
import Layout from '../layouts/Layout'
import SingleCategory from '../components/onlineVideo/SingleCategory'

const OnlineSingleCategoryPage = (props) => {
  return (
    <Layout title="SINGLE ONLINE CATEGORY">
      <SingleCategory paramsid={props.match.params.id} />
    </Layout>
  )
}

export default OnlineSingleCategoryPage
