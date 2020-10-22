import axios from "axios";
// create faculty api
export const createFaculty = async ({ name }) => await axios.post('http://localhost:5050/api/faculty', { name });
// get faculty api
export const getFaculty = async () => await axios.get('http://localhost:5050/api/faculty')

