import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import Aux from '../../hoc/_Aux'

const  Showcat = () => {
    const [faculties, setFaculties] = useState([]);


    // delete faculty data from database
    const deleteFaculty = async (id) => {
        const { data } = await axios.delete(`http://localhost:5050/api/faculty/${id}`);
        const remainingFaculty = faculties.filter(faculty => faculty._id !== data._id);
        setFaculties(remainingFaculty);
    }
    // get faculties data from database
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('http://localhost:5050/api/faculty');
                setFaculties(data);
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);
    return (
        <Aux>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Faculty Name</th>   
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {faculties && faculties.map((single, index)=>(
                        <tr key={index}>
                            <td>{single.name}</td>
                            <td>
                                <button className="btn btn-outline-primary mr-2 btn-sm">Edit</button>
                                <button onClick={() => deleteFaculty(single._id)} className="btn btn-outline-danger btn-sm">Delete</button>
                            </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </Aux>
    )
}


export default Showcat