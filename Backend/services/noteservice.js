const db = require('../models');
const Note = db.note;

const findNotes = async() =>{
try {
    const findNotes = await Note.findAll();
    console.log("From service")
    if (findNotes.length === 0) {
        return {
            status: 404,
            result: {
                message: 'No notes found.'
            }
        }
    }
    return {
        status: 200,
        result: findNotes,
    }
} catch (err) {
    return {
        status: 500,
        result: {
            message: "Some error occured while retrieving notes." || err.message
        }
    }
}
}


const findNoteById = async (id) =>{
    try{

        const findNote = await Note.findByPk(id);
        if (!findNote) {
            return {
                status: 404,
                result: {
                    message: `Note with id ${id} not found.`
                }
            }
        }
        return {
            status: 200,
            result: findNote,
        }

    }catch(err){
        return {
            status: 500,
            result:{
                message: `Some error occures while retrieving Note` || err.message
            }
        }
    }
}

const addNote = async (NoteData) =>{
    try{
        const newNote = await Note.create(NoteData);
        return{
            status: 201,
            result: newNote, 
        }
    }catch(err){
        return {
            status: 500,
            result: {
                message: "Some error occured while creating new note." || err.message
            }
        }
    }
}


const deleteNote = async (id) => {
    try{
        const deleteCount = await Note.destroy({where : {id, id}});
        if (deleteCount == 1) {
            return {
                status: 200,
                result: {
                    message: 'Note was deleted successfully.',
                }
            }
        }
        return {
            status: 404,
            result: {
                message: `Note with id=${id} not found!`,
            }
        }
    }catch(err){
        return {
            status: 500,
            result: {
                message: "Some error occured while deleting new note." || err.message
            }
        }
    }
}

module.exports = {
    findNotes,
    findNoteById,
    addNote,
    deleteNote
}