import React, { Component } from 'react'
import App from '../../App'
import Footer from '../Footer/Footer'
import Form from './Form'
import { NavLink } from 'react-router-dom';
class AddDoctor extends Component {
    render() {
        return (
            <App>
                <div className="content-wrapper">
                    <div className="breadcrum-area">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <NavLink to="/dashboard">Dashboard</NavLink>
                                        </li>
                                        <li className="breadcrumb-item active">Add Doctor</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="add-doctor-content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Form />
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
export default AddDoctor