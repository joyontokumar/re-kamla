const express = require('express');
const router = express.Router();
// all user controller require
const facultyController = require('../controllers/facultyController');
// all faculty routes
router.get('/', facultyController.getallFaculty);
router.post('/', facultyController.createFacultyController);
router.put('/:id', facultyController.updateFacultyController);
router.delete('/:id', facultyController.deleteFacultytroller);
// faculty wise doctors lists show
router.get('/doctors/:id', facultyController.getSingleFacultyDoctorLists)
module.exports = router;