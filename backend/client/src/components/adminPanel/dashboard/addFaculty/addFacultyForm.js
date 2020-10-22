import React, { Component, useState } from 'react';
import axios from 'axios';
import Aux from '../../hoc/_Aux';
import { createFaculty } from "../../api/faculty";
// file export
import Button from "../../button/Button";
import Input from "../../input/Input";

const AddFacultyForm = () => {
    const [name, setFacultyName] = useState('');
    // submit faculty name
    const submit = async (e) => {
        e.preventDefault();
        const faculty = createFaculty({ name })
    }
    return (
        <Aux>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="faculyname">Faculty Name</label>
                    <Input type="text" id="faculyname" placeholder="Faculty Name" onChange={setFacultyName} />
                </div>
                <Button type="submit" value="Add Faculty" />
            </form>
        </Aux>
    )

}
export default AddFacultyForm