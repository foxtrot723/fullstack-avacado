const mongoose = require("mongoose")
const Schema = mongoose.Schema

const noteSchema = new Schema({
    title: String,
    tag: String,
    body: String,
    imgUrl: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Notes", noteSchema)