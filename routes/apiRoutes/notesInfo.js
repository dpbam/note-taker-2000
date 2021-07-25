const router = require('express').Router();
const path = require('path');
const uuid = require('uuid');
const fs = require('fs');
const notesArray = require('../../db/db.json');
const saveNote = "";

router.get('/notes', (req, res) => {
    return res.json(notesArray);  
       
});
console.log(notesArray, "notesArray");

router.post('/notes', (req, res) => {
    const id = saveNote.length.toString();
    const newNote = { title: req.body.title, text: req.body.text, id: id }
    console.log(newNote, "newNote");
    console.log(typeof newNote, "newNoteType");
    notesArray.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({ notesArray: notesArray }, null, 2)
    );

    res.json(newNote, id);

});

router.delete('/notes', (req, res) => {

});

module.exports = router;
