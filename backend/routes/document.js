const express = require('express');
const router = express.Router();
// all user controller require
const documentController = require('../controllers/documentController');

// all document routes
router.get('/', documentController.getAllDocument);
router.post('/', documentController.createDocumentController);
router.put('/edit/:id', documentController.updateDocumentController);
router.delete('/delete/:id', documentController.deleteDocumentController);
router.get('/category/:id', documentController.getSubjectDocument);
router.get('/single/:id', documentController.getSingleDocument);

module.exports = router;