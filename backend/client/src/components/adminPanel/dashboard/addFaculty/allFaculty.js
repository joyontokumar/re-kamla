import React, { Component } from 'react'
import App from '../../App';
import ShowFaculty from '../addFaculty/showFaculty';
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom'
class AllFaculty extends Component {
    render() {
        return (
            <App>
                <div className="content-wrapper">
                    <div className="bredcrum-area">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <ol className="breadcrumb breadcrumb-content mb-5">
                                        <li className="breadcrumb-item">
                                            <NavLink to="/dashboard">Dashboard</NavLink>
                                        </li>
                                        <li className="breadcrumb-item active">All Faculty</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="show-content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <ShowFaculty />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </App >
        )
    }
}

export default AllFaculty