const express = require('express');
const router = express.Router();
// all subject controllers
const subjectController = require('../controllers/subjectController');

// all subject routes
router.get('/', subjectController.getAllSubject);
router.post('/', subjectController.createSubjectController);
router.put('/edit/:id', subjectController.updateSubjectController);
router.delete('/delete/:id', subjectController.deleteSubjectController);

module.exports = router;