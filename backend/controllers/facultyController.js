// require model
// const doctor = require("../model/doctor");
const { json } = require("express");
const Doctor = require("../model/doctor");
// const faculty = require("../model/faculty");
const Faculty = require("../model/faculty");

// get all faculty
const getallFaculty = async(req, res) =>{
    res.send(await Faculty.find())
}

// faculty wise doctors lists show
const getSingleFacultyDoctorLists = async (req, res) => {
    const { id } = req.params;
    Faculty.find()
        .populate('doctors')
        .then(faculty => {
            res.send(faculty)
        });
};

// create faculty 
const createFacultyController = async (req, res) => {
    console.log(req.body);
    const newFaculty = new Faculty({
        name: req.body.name
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
    getSingleFacultyDoctorLists
}