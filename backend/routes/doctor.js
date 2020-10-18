const express = require('express');
const router = express.Router();
// all user controller require
const doctorController = require('../controllers/doctorController');

// all faculty routes
router.get('/', doctorController.getallDoctor);
router.post('/', doctorController.createDoctorController);
router.put('/:id', doctorController.updateDoctorController);
router.delete('/:id',doctorController.deleteDoctorController);


module.exports = router;
