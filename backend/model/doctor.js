// require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// user schema 
const doctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    designation:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    faculty: [{
        type: Schema.Types.ObjectId,
        ref: 'Faculty',
        required: true
    }]
});

module.exports = mongoose.model('Doctor', doctorSchema);