const Track = require('../models/track')
const { param } = require('../routes/trackRoutes')

//Add a new track
async function createTrack(req, res){
    try{
        console.log(req.body)
        const createdTrack = await Track.create(req.body)
        res.status(201).json(createdTrack)
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

//Get all tracks
async function listTrack(req, res){
    try{
        const tracks = await Track.find()
        res.status(200).json(tracks)
    }catch(err){
        res.status(500).json({error: err.message})
    }
} 

//Get a single track
async function trackDetails(req, res){
    try{
        trackDetails = await Track.findById(req.params.id)
        res.status(200).json(trackDetails)
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

//Update a track
async function updateTrack(req, res){
    try{
        const updatedTrack = await Track.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedTrack)
    }catch(err){
        res.status(500).json({error: err.message})   
    }
}

//Delete a Track
async function deleteTrack(req, res){
    try{
        const deletedTrack = await Track.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedTrack)
    }catch(err){
      res.status(500).json({error: err.message})  
    }
}

module.exports = {
    createTrack, 
    listTrack,
    trackDetails,
    updateTrack,
    deleteTrack
}

