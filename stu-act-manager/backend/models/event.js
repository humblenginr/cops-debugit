var mongoose = require('mongoose');
var {Schema} = mongoose;

//Event Schema
var EventSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    Subject: {
        type: String,
        required:true,
        maxlength: 52,
    },
    StartTime: {
        type: Date,
        // required: true
    },
    EndTime: {
        type: Date,
        // required: true
    },
    link: {
        type: String,
    }
    
});

module.exports = mongoose.model('Event', EventSchema);