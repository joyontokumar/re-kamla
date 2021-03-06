// require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// faculty schema 
const facultySchema = new Schema({
    name: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Faculty', facultySchema);