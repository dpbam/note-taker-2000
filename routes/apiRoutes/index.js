const router = require('express').Router();
const uuid = require('uuid');
const fs = require('fs');

const savedNotes = ('../db/db.json')

router.get('api/notes', (req, res) => {
    return res.json(savedNotes);  
       
});
console.log(savedNotes);

router.post('api/notes', (req, res) => {
    fs.readFile(__dirname + './db/db.json', 'utf-8', (error, notes) {
        if (error) {
            return console.log(error)
        }
        
        notes = JSON.parse(notes);

        const id = notes[notes.length -1].id + 1
        const newNote = { title: req.body.title, text: req.body.text, id: id }
        const activeNote = notes.concat(newNote)

        fs.writeFile(__dirname + './db/db.json', JSON.stringify(activeNote), (error, data) => {
            if (error) {
                return error
            }
            console.log(activeNote);
            res.json(activeNote);
        })
    });
    // const newNote = req.body;
    // console.log(newNote);

    // note.push(newNote);
    
    // res.json(newNote);
})