// require model
const doctor = require("../model/doctor");
const Faculty = require("../model/faculty");

// get all faculty 
const getallFaculty = async (req, res) => {
    res.send(await Faculty.find());
}

// create faculty 
const createFacultyController = async (req, res) => {
    const { name } = req.body;
    const newFaculty = new Faculty({
        name,
    })
    res.send(await newFaculty.save());
}

// edit or update faculty
const updateFacultyController = async (req, res) => {
    const { id } = req.params;
    const { name, doctors} = req.body;
    const faculty = await Faculty.findById(id);
    faculty.name = name || faculty.name;
    res.send(await faculty.save());
}

// delete faculty
const deleteFacultytroller = async (req, res) => {
    const { id } = req.params;
    const deleteFaculty = await Faculty.findById(id);
    res.send(await deleteFaculty.remove());
}

//  exports all faculty controllers
module.exports = {
    getallFaculty,
    createFacultyController,
    updateFacultyController,
    deleteFacultytroller,
}