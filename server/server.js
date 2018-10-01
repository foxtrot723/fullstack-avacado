const express = require("express")
const app = express()
require("dotenv").config()
const expressJwt = require("express-jwt")
const morgan = require("morgan")
const mongoose = require("mongoose")
const notesRoutes = require("./routes/notes")
const authRoutes = require("./routes/auth")
const profileRoutes = require("./routes/profile")

app.use("express-json")
app.use(morgan("dev"))

// Connect to the Database
mongoose.connect("mongodb://localhost:27017/react-auth", { useNewUrlParser: true }, () => {
    console.log("We are now connected to the database")
}).catch(err => console.log(err))

app.use("/api", expressJwt({ secret: process.env.SECRET }))

app.use("/auth", authRoutes)
app.use("/api/notes", notesRoutes)

// Added profile route to be able to re-verify a user when they refresh on a different page.
app.use("/api/profile", profileRoutes)

app.listen(4200, () => {
    console.log("server is running on port 4200")
})
