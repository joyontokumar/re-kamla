import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import author from '../../../../assets/images/dashboard/author.jpg'
import logo from '../../../../assets/images/dashboard/logo.png'

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark" id="mainNav">
                <NavLink className="navbar-brand" to="/dashboard"><img src={logo} alt=""/></NavLink>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="right-sidebar-author">
                    <ul>
                        <li><Link to="/dashboard"><i class="fas fa-bell-slash"></i></Link></li>
                        <li><Link to="/dashboard"><i class="fas fa-user"></i></Link></li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav navbar-sidenav dashboard-bg" id="exampleAccordion">
                        <li className="nav-item">
                            <Link to="" href="#" class="nav-link d-block text-center nav-admin-profile-area mb-5">
                                <div class="profile-image">
                                    <img class="img-sm rounded-circle" src={author} alt="profile image"/>
                                    </div>
                                    <div class="profile-text-wrapper mt-2">
                                        <p class="profile-name">Sweet Dream Girl</p>
                                        <p class="designation">Online <span class="dot-indicator bg-success"></span></p>
                                    </div>
                            </Link>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                            <NavLink exect className="nav-link" exact to="/dashboard"><i class="fas fa-desktop"></i>
                                <span className="nav-link-text">Dashboard</span></NavLink>
                        </li>

                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Add Doctor">
                            <NavLink exect className="nav-link" exact to="/dashboard/adddoctor"><i class="fas fa-edit"></i>
                                <span className="nav-link-text">Add Doctor</span></NavLink>
                        </li>

                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Add Faculty">
                            <NavLink exect className="nav-link" exact to="/dashboard/addfaculty"><i class="fas fa-align-justify"></i>
                                <span className="nav-link-text">Add Faculty</span></NavLink>
                        </li>


                    </ul>
                </div>
            </nav>
        )
    }
}

export default Menu