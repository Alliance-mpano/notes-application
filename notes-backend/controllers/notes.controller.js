const { getNote, createNote, update, remobe, remove } = require("../services/notes.services");

const addNote = async (req,res) => {
    try{
        const saveNote = await createNote(req.body)
        return res.status(201).send(savedNote)
    }catch(err) {
        console.log(err)
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}

const getAllNotes = async (req,res) => {
    try{
        const notes = await getNote();
        return res.status(200).send(notes);
    }catch(err) {
        console.log(err)
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}

const updateNote = async (req,res) => {
    try{
        const updatedNote = await update(req.params.id,req.body)
        return res.status(200).send(updatedNote);
    }catch(err) {
        console.log(err)
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}

const deleteNote = async (req,res) => {
    try{
        const note = await remove(req.params.id)
        return res.status(400).send("Note deleted successfully")
    }catch(err) {
        console.log(err)
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}

module.exports = {deleteNote, updateNote, getAllNotes, addNote}