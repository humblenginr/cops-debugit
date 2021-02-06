var mongoose = require('mongoose');
var {Schema} = mongoose;

//Event Schema
var EventSchema = new Schema({
    user: {
        type: ObjectId,
        ref: "User"
    },
    name: {
        type: String,
        required:true,
        maxlength: 52,
    },
    date: {
        type: Date,
        required: true
    },
    link: {
        type: String,
    }
    
});

module.exports = mongoose.model('Event', EventSchema);