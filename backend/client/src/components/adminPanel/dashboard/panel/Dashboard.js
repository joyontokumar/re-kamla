import React, { Component } from 'react'
// import App from '../../App'
import App from '../../App';
import Footer from '../Footer/Footer';
import IconCards from './IconCards/IconCards';
import { NavLink } from 'react-router-dom';
class dashboard extends Component {
    render() {
        return (
            <App>
                <div className="content-wrapper">
                    <div className="breadcrum-area">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <ol className="breadcrumb breadcrumb-content mb-5">
                                        <li className="breadcrumb-item active">My Dashboard</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <IconCards />
                    <Footer />
                </div>
            </App >
        )
    }

}
export default dashboard