const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser")
const cookieParser = require('cookie-parser')
const { User } = require("./models/user")
const config = require("./config/key")


mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Db is Conneted");

})

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())
app.use(cookieParser())


app.post('/api/users/register', (req, res) => {
    const user = new User(req.body)

    user.save((err, userData) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })
    
})

app.get("/", (req, res) => {
    res.send("This is My Main Page")
})



app.listen(5000, () => {
    console.log("Listen to the port of 5000")
})