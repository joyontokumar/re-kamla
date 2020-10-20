// require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// youtube schema 
const documentSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    documentfile: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    subject:{
        type: Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    }
});

module.exports = mongoose.model('Document', documentSchema);