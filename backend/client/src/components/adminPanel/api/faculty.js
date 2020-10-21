import axios from "axios";
// create faculty api
export const createFaculty = async ({ name }) => await axios.post('http://localhost:5050/api/faculty', { name });

