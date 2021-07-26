const router = require('express').Router();
const path = require('path');
// const uuid = require('uuid');
const fs = require('fs');
const { notesArray } = require('../../db/db.json');
const saveNote = "";

router.get('/notes', (req, res) => {
    return res.json(notesArray);  
       
});
console.log(notesArray, "notesArray");

router.post('/notes', (req, res) => {
    const id = saveNote.length.toString();
    const newNote = { title: req.body.title, text: req.body.text, id: id }
    // const newNote = { title: "this is a title", text: "this is some text", id: id }

    console.log(newNote, "newNote");
    console.log(typeof newNote, "newNoteType");
    notesArray.push(newNote);

    // fs.writeFileSync(
    //     path.join(__dirname, '../../db/db.json'),
    //     JSON.stringify({ notesArray: notesArray }, null, 2)
    // );

    res.status(newNote, id);

});

router.delete('/api/notes/:id', (req, res) => {
    const noteId = JSON.parse(req.params.id)
    console.log(noteId)

    fs.readFile(__dirname + "db/db.json", (err, notesThings) => {
        if (err) {
            return error
        } 
        notesThings = JSON.parse(notesThings)

        notesThings = notesThings.filter(val => val.id !== noteId)

        fs.writeFile(__dirname + "/db/db.json", JSON.stringify(notesThings), (err, data) => {
            if (err) {
                return error
            }
            res.json(notesThings)
        })
    });
});

module.exports = router;
