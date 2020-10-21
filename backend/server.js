// required express
const express = require('express');
const app = express();
const cors = require('cors');
const path = require("path");
// add request
const request = require('request');
// require mongoose
const mongoose = require('mongoose');


app.use(cors());
app.use(express.json());
// require router
const facultyRoute = require('./routes/faculty');
const doctorRoute = require('./routes/doctor');
const subjectRoute = require('./routes/subject');
const youtubeRoute = require('./routes/youtube');
const documentRoute = require('./routes/document');
// import database file
const config = require("./config/index");
const PORT = process.env.PORT || 5050;
// database connect 
(async () => {
    try {
        await mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("connected");
    } catch (error) {
        console.log(error)
    }
})()
// get all data
app.get('/', (req, res) => {
    res.json({
        body: "application start"
    })
})
// all api routes
app.use('/api/faculty', facultyRoute);
app.use('/api/doctor', doctorRoute);
app.use('/api/subject', subjectRoute);
app.use('/api/youtube', youtubeRoute);
app.use('/api/document', documentRoute);
app.use('/image', express.static(path.join(__dirname, 'public')))
app.listen(PORT, () => {
    console.log('server running');
})