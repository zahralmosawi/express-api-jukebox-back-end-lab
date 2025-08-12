const express = require('express')
const router = express.Router()
const trackController = require('../controllers/track')

router.post('/tracks', trackController.createTrack)
router.get('/tracks', trackController.listTrack)
router.get('/tracks/:id', trackController.trackDetails)
router.put('/tracks/:id', trackController.updateTrack)
router.delete('/tracks/:id', trackController.deleteTrack)

module.exports = router