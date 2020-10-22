import React from 'react';
const Button = ({ type, value }) => {
    return (
        <React.Fragment>
            <div className="form-group">
                <input type={type} className="btn btn-primary mt-3" value={value} />
            </div>
        </React.Fragment>
    )
}
export default Button;