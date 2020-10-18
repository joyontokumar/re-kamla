// require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// user schema 
const facultySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    doctors: [{
        type: Schema.Types.ObjectId,
        ref: 'Doctor'
    }]
});

module.exports = mongoose.model('Faculty', facultySchema);