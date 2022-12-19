const { deleteNote, updateNote, addNote, getAllNotes } = require('../controllers/notes.controller')

const router = require('express').Router()

router.get('/all', getAllNotes)
router.post('/add', addNote)
router.post('/update/:id', updateNote)
router.delete('/delete/:id', deleteNote)
module.exports = router