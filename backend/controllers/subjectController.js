// require model
const Subject = require("../model/subject");
// get all subject 
const getAllSubject = async (req, res) => {
    res.send(await Subject.find())
};

//  create subject controller
const createSubjectController = async (req, res) => {
    const newSubject = new Subject({
        name: req.body.name
    })
    res.send(await newSubject.save());
}

// edit or update subject controller
const updateSubjectController = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const subject = await Subject.findById(id);
    subject.name = name || subject.name;
    res.send(await subject.save());
}

// delete subject controller
const deleteSubjectController = async (req, res) => {
    const { id } = req.params;
    const deleteSubject = await Subject.findById(id);
    res.send(await deleteSubject.remove());
} 

// exports all subject controllers
module.exports = {
    getAllSubject,
    createSubjectController,
    updateSubjectController,
    deleteSubjectController
}