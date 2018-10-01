const express = require("express")
const authRouter = express.Router()
const User = require("../models/user")
const jwt = require("jsonwebtoken")

authRouter.post("/signup", (req, res) => {
    // this line is trying to see if there is already a user with the matching name. if so we want 
    // to tell them that the username has already been taken
    User.findOne({ username: req.body.username }, (err, existingUser) => {
        if (err) res.status(500).send({ success: false, err})
        // if the database doesnt return null it means that there is already a user with that username
        if (existingUser !== null) {
            return res.status(400).send({ success: false, err: "That username has already been taken" })
        }
        // if the function reaches this point and has not returned already, we are safe to create the 
        // new user in the database
        const newUser = new User(req.body)
        newUser.save((err, user) => {
            if (err) return res.status(500).send({ success: false, err })
            // if the user signs up now, we will give them a token so that they dont have to immediately login
            const token = jwt.sign(user.toObject(), process.env.SECRET)
            return res.status(201).send({ success: true, user: user.withoutPassword(), token })
        })
    })
})

authRouter.post("/login", (req, res) => {
    // Try to find the user with the submitted username (lowercased)
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) return res.status(500).send(err)
        // If that user isn't in the database OR the password is wrong:
        if (!user) {
            return res.status(403).send({ success: false, err: "Username or password are incorrect" })
        }

        // Use our checkPassword method to see if the password matches
        user.checkPassword(req.body.password, (err, match) => {
            if (err) return res.status(500).send(err)
            if (!match) res.status(401).send({ success: false, message: "Username and password are incorrect" })
            // if the password matches, lets create the token and send that and the user info to the client
            const token = jwt.sign(user.toObject(), process.env.SECRET)
            return res.send({ token, user: user.withoutPassword(), success: true })
        })

    })
})

module.exports = authRouter