import React, { Component } from 'react'
// import App from '../App'
import App from '../../App';
import AddFacultyForm from '../addFaculty/addFacultyForm';
import ShowFaculty from '../addFaculty/showFaculty';
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom'
class category extends Component {
    render() {
        return (
            <App>
                <div className="content-wrapper">
                    <div className="bredcrum-area">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <NavLink to="/dashboard">Dashboard</NavLink>
                                        </li>
                                        <li className="breadcrumb-item active">Add Faculty</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="add-category-content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <AddFacultyForm />
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

export default category