const express = require('express');
const router = express.Router();

const {
    getAllNotes,
    addNote,
    getNote,
    editNote,
    deleteNote,
} = require('../controllers/notes');
const { authProvider } = require('../middlewares');

// api/notes/
router.get('/allNotes', authProvider, getAllNotes);
router.get('/:codeid', authProvider, getNote);
router.post('/', authProvider, addNote);
router.put('/:noteid', authProvider, editNote);
router.delete('/:noteid', authProvider, deleteNote);

module.exports = router;