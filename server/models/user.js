const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

// Presave `hook` to encrypt password before saving the new user's information
// this turns the password into a encrypted string

userSchema.pre("save", function(next) {
    const user = this
    if(!user.isModified("password")) return next()
    bcrypt.hash(user.password, 10, function(err, hash) {
        if (err) return next(err)
        user.password = hash
        next()
    })
})

// checks the decrypted password against the users' password attempt when they log in
userSchema.methods.checkPassword = function(passwordAttempt, callback) {
    const user = this
    bcrypt.compare(passwordAttempt, user.password, function(err, isMatch){
        if (err) return callback(err)
        callback(null, isMatch)
    })
}

//Remove the password from the object being sent back to the client
userSchema.methods.withoutPassword = function() {
    // toObject() is a mongoose method
    const user = this.toObject()
    delete user.password
    return user
}

module.exports = mongoose.model("User", userSchema)