// require model
const Doctor = require("../model/doctor");
const Faculty = require('../model/faculty')

// get all doctor 
const getallDoctor = async (req, res) => {
    res.send(await Doctor.find());
}

// create doctor 
const createDoctorController = async (req, res) => {
    const { name, description, designation, faculty} = req.body;

    const newDoctor = new Doctor({
        name,
        description,
        designation,
        faculty
    })
    res.send(await newDoctor.save());
    let fac = new Faculty();
    console.log(fac.doctors.push(newDoctor));
}

// edit or update doctor
const updateDoctorController = async (req, res) => {
    const { id } = req.params;
    const { name, description, designation } = req.body;
    const doctor = await Doctor.findById(id);
    doctor.name = name || doctor.name;
    doctor.description = description || doctor.description;
    doctor.designation = designation || doctor.designation;
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
    createDoctorController,
    updateDoctorController,
    deleteDoctorController,
}