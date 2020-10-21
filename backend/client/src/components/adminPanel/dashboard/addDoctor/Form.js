import React, { Component } from 'react'
import axios from 'axios'
import Aux from '../../hoc/_Aux'
class Form extends Component {
    render() {
        return (
            <Aux>
                <div className="form-group">
                    <label htmlFor="name">Doctor Name : </label>
                    <input type="text" id="name" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="designation">Doctor Designation : </label>
                    <input type="text" id="designation" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Doctor Description : </label>
                    <input type="text" id="description" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="faculty">Select Faculty :</label>
                </div>
                <select name="" id="" className="form-control">
                    <option value="">Mental Health</option>
                    <option value="">Space Language</option>
                    <option value="">Therapist</option>
                </select>
                <div className="form-group">
                    <label htmlFor="exampleInputFile">Image</label>
                    <input type="file" className="form-control-file" />
                </div>
                <button type="submit" onClick={this.SendInfo} className="btn btn-primary">Submit</button>
            </Aux>

        )
    }
}
export default Form