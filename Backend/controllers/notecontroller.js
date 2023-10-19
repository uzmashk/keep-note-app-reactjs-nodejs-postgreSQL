const service = require("../services/noteservice")

const getAllNotes = (req, res) =>{
    service.findNotes()
        .then(data => {
            res.status(data.status).send(data.result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

const getNoteById = (req, res) =>{
    var id = req.params.id;

    service.findNoteById(id)
            .then(data => {
                console.log(data.result)
                res.status(data.status).send(data.result)
            })
            .catch(err => {
                res.status(500).send(err)
            })
}

const createNote = (req, res) =>{
    const noteData = {
        title: req.body.title,
        description: req.body.description
    }
    service.addNote(noteData)
        .then(data => {
            res.status(data.status).send(data.result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

const deleteNote = (req, res) =>{
    const id = req.params.id;

    service.deleteNote(id)
    .then(data => {
        res.status(data.status).send(data.result)
    })
    .catch(err => {
        res.status(500).send(err)
    })
}

module.exports = {
    getAllNotes,
    getNoteById,
    createNote,
    deleteNote
}