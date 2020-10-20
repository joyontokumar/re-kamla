// require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// youtube schema 
const youtubeSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    videoid:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    youtube: {
        type: Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    }
});

module.exports = mongoose.model('Youtube', youtubeSchema);