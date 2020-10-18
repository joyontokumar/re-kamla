import React from 'react'
import {Link} from 'react-router-dom'

const  Card = (props) => {
    const {name} = props.lists
    return (
        <>
            <div className="col-lg-3">
                <Link to="/protibondi-lists" className="protbondi-health-list">
                <h4>{name}</h4>
                </Link> 
            </div> 
        </>
    )
}

export default Card
