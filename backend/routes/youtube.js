const express = require('express');
const router = express.Router();
// all youtube controllers
const youtubeController = require('../controllers/youtubeController');

// all subject routes
router.get('/', youtubeController.getAllYoutube);
router.post('/', youtubeController.createYoutubeController);
router.put('/edit/:id', youtubeController.updateYoutubeController);
router.delete('/delete/:id', youtubeController.deleteYoutubeController);
router.get('/category/:id', youtubeController.getSubjectYoutube);
router.get('/single/:id', youtubeController.getSingleYoutube);

module.exports = router;