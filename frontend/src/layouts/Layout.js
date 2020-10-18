import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ children, title }) {
  return (
    <>
      <Header />
      {title ? (
        <div className="breadcrum-banner-area shape-circle-round">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrum-inner-content">
                  <h2>{title}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}

      {children}
      <Footer />
    </>
  )
}

export default Layout
