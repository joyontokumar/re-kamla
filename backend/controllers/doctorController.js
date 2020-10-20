// require model
// const doctor = require("../model/doctor");
const Doctor = require("../model/doctor");
const Faculty = require('../model/faculty')
// get all doctor 
const getallDoctor = async (req, res) => {
    Doctor.find()
    .populate('faculty')
    .then(doctors => {
        res.send(doctors)}
        )
};

// faculty wise doctors show
const getFacultyDoctorLists = async (req, res) => {
    const { id } = req.params;
    await Doctor.find()
        .then(doctor => {
            const data = doctor.filter(item => {
                return item.faculty._id == id;
            });
            res.send(data);
        })
};

// create doctor 
const createDoctorController = async (req, res) => {
    const newDoctor = new Doctor({
        name: req.body.name,
        designation: req.body.designation,
        description: req.body.description,
        faculty: req.body.faculty
    });
    newDoctor.save().then(doctor => {
        res.send(doctor);
    })
};

// edit or update doctor
const updateDoctorController = async (req, res) => {
    const { id } = req.params;
    const { name, description, designation, faculty } = req.body;
    const doctor = await Doctor.findById(id);
    doctor.name = name || doctor.name;
    doctor.description = description || doctor.description;
    doctor.designation = designation || doctor.designation;
    doctor.faculty = faculty || doctor.faculty;
    res.send(await doctor.save());
}

// delete doctor
const deleteDoctorController = async (req, res) => {
    const { id } = req.params;
    const deleteDoctor = await Doctor.findById(id);
    res.send(await deleteDoctor.remove());
} 

// exports all doctor controllers
module.exports = {
    getallDoctor,
    getFacultyDoctorLists,
    createDoctorController,
    updateDoctorController,
    deleteDoctorController,
}