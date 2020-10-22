
import axios from "axios";
// create user api
export const createDoctor = async ({ name, designation, description, faculty }) => await axios.post('http://localhost:5050/api/doctor', { name, designation, description, faculty });