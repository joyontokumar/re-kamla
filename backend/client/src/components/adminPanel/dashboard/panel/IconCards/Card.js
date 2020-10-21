import React from 'react'

function Card() {
    return (
        <>
            <div className="col-lg-3">
                <div className="admin-card">
                    <div class="admin-card-icon">
                        <i class="fa fa-users" aria-hidden="true"></i>
                    </div>
                    <div class="admin-card-content">
                        <h6 class="mt-0 mb-1">Total Patients</h6>
                        <p className="card-color">213</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="admin-card">
                    <div class="admin-card-icon">
                        <i class="fa fa-calendar-minus-o" aria-hidden="true"></i>
                    </div>
                    <div class="admin-card-content">
                        <h6 class="mt-0 mb-1">Total Appointments</h6>
                        <p className="card-color">213</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="admin-card">
                    <div class="admin-card-icon">
                        <i class="fa fa-bicycle" aria-hidden="true"></i>
                    </div>
                    <div class="admin-card-content">
                        <h6 class="mt-0 mb-1">Total Online Video</h6>
                        <p className="card-color">213</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="admin-card">
                    <div class="admin-card-icon">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div class="admin-card-content">
                        <h6 class="mt-0 mb-1">Total Doctors</h6>
                        <p className="card-color">213</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
