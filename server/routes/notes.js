const express = require("express")
const notesRouter = express.Router()
const Notes = require("../models/notes")

// notesRouter.route("/")
//     .get((req, res) => {
//         Notes.find({ user: req.user._id }, (err, notes) => {
//             if (err) return res.status(500).send(err)
//             return res.status(200).send(notes)
//         })
//     })
//     .post((req, res) => {
//         const newNote = new Notes(req.body)
//         newNote.user = req.user._id
//         newNote.save((err, newNote) => {
//             if (err) return res.status(500).send(err)
//             return res.status(201).send(newNote)
//         })
//     })

// notesRouter.route("/:id")
    // .get((req, res) => {
    //     Notes.findOne({ _id: req.params.id, user: req.user._id }, (err, note) => {
    //         if (err) return res.status(500).send(err)
    //         if (!note) return res.status(404).send("No post found")
    //         return res.status(200).send(note)
    //     })
    // })
    // .put((req, res) => {
    //     Notes.findOneAndUpdate({ _id: req.params.id, user: req.user._id },
    //         req.body,
    //         { new: true },
    //         (err, updatedNote) => {
    //             if (err) return res.status(500).send(err)
    //             return res.status(201).send(updatedNote)
    //         }
    //     )
    // })
    // .delete((req, res) => {
    //     Notes.findOneAndRemove({ _id: req.params.id, user: req.user._id }, (err, deletedNote) => {
    //         if (err) return res.status(500).send(err)
    //         return res.status(201).send(deletedPost)
    //     })
    // })

notesRouter.get("/", (req, res) => {
    Notes.find({ user: req.user._id }, (err, notes) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(notes)
    })
})

notesRouter.post("/", (req, res) => {
    const newNote = new Notes(req.body)
    newNote.user = req.user._id
    newNote.save((err, newNote) => {
        if (err) return res.status(500).send(err)
        return res.status(201).send(newNote)
    })
})

notesRouter.put("/", (req, res) => {
    Notes.findOneAndUpdate(
        { _id: req.params.id, user: req.user._id },
        req.body,
        { new: true },
        (err, updatedNote) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(updatedNote)
        }
    )
})

// notesRouter.get("/:id", (req, res) => {
//     Notes.findOneAndUpdate(
//         { _id: req.params.noteId, user: req.user._id },
//         req.body,
//         { new: true },
//         (err, note) => {
//             if (err) return res.status(500).send(err)
//             return res.send(note)
//         }
//     )
// })

notesRouter.delete("/:id", (req, res) => {
    Notes.findOneAndRemove({ _id: req.params.noteId, user: req.user._id }, (err, note) => {
        if (err) return res.status(500).send(err)
        return res.status(201).send(note)
    })
})

module.exports = notesRouter













