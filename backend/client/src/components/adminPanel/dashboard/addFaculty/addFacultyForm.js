import React, { Component } from 'react';
import Aux from '../../hoc/_Aux';

class AddFacultyForm extends Component {
    render() {
        return (
            <Aux>
                <div className="form-group">
                    <label htmlFor="faculyname">Faculty Name</label>
                    <input type="text" id="faculyname" className="form-control" />
                </div>
                <button type="submit" onClick={this.SendInfo} className="btn btn-primary">Add Faculty</button>
            </Aux>
        )
    }
}
export default AddFacultyForm