const express = require('express')
const router = express.Router()
const trackController = require('../controllers/track')

router.post('/add-track', trackController.createTrack)
router.get('/tracks', trackController.listTrack)
router.get('/tracks/:id', trackController.trackDetails)
router.put('/edit-track/:id', trackController.updateTrack)
router.delete('/:id', trackController.deleteTrack)

module.exports = router