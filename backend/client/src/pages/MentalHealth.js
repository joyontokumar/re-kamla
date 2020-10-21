import React, { Suspense } from 'react'
import Layout from '../layouts/Layout'
import DoctorList from '../components/mentahealth/DoctorList'

const MentalHealth = () => {
  return (
    <Layout title="MENTAL HEALTH DOCTOR LISTS">
      <DoctorList />
    </Layout>
  )
}

export default MentalHealth
