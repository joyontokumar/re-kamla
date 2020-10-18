import React from 'react'
import Layout from '../layouts/Layout'
import DoctorProfileList from '../components/doctorProfileList/Index'

const DoctorProfileListPage = () => {
  return (
    <Layout title="ALL DEPARTMENT DOCTORS LIST">
      <DoctorProfileList />
    </Layout>
  )
}

export default DoctorProfileListPage
