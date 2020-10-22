import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Aux from '../../hoc/_Aux'
import Button from "../../button/Button"
import Input from '../../input/Input'
//  creaet doctor api
import { createDoctor } from "../../api/doctor";
// get all faculty api
import { getFaculty} from "../../api/faculty"
const Form  = () =>{
    const[name, setName] = useState('');
    const [designation, Setdesignation] = useState('');
    const [description, Setdescription] = useState('');
    // const[service_icon, setServiceIcon] = useState('');
    const [faculty, Setfaculties] = useState([]);

    // submit doctor
    const submit = async (e) => {
        e.preventDefault();
        const doctor = createDoctor({ name, designation, description, faculty})
        console.log(doctor)
    }

    // get all faculty  data from database
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('http://localhost:5050/api/faculty');
                Setfaculties(data);
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);

    return (
        <Aux>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="doctorname">Doctor Name : </label>
                    <Input type="text" id="doctorname" placeholder="Doctor Name" onChange={setName} value={name} />
                </div>
                <div className="form-group">
                    <label htmlFor="designation">Doctor Designation :</label>
                    <Input type="text" id="designation" placeholder="Doctor Designation" onChange={Setdesignation} value={designation} />
                </div>
                <div className="form-group">

                    <label htmlFor="description">Doctor Description :</label>
                    <Input type="text" id="description" placeholder="Doctor Description" onChange={Setdescription} value={description} />
                </div>
                <div className="form-group">
                    <label htmlFor="faculty">Select Faculty :</label>
                </div>
                <select name="faculty" id="faculty" className="form-control" value={faculty} onChange={e => Setfaculties(e.target.value)}>
                    {faculty && faculty.map((fac, index)=>(
                        <option value={`${fac._id}`} key={index}>{fac.name}</option>
                    ))}
                </select>
                <Button type="submit" value="Add Doctor" />
            </form>
        </Aux>
    )
}
export default Form