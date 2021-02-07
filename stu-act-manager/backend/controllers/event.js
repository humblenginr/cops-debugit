var Event = require('../models/event');
var User = require('../models/user');

exports.getEventById = (req, res, next,id) =>{
    Event.findById(id)
    .exec((err,event) => {
        if(err || !event){
            res.status(400).json({Error: "Event not found!"})
        }
        req.event = event;
        next();
    })
}

exports.createEvent = (req,res) => {
    const event = new Event(req.body);
    event.user = req.profile._id;
    event.save((err,event) => {
        if(err || !event){
            res.status(400).json({Error: "Unable to save event in database!"})
        }
        User.findById(req.profile._id).exec((err,user) => {
            if(err || !user){
                res.status(400).json({Error: "User not found in database!"})
            }
            var events = user.events;
            events.push(event._id);
            user.events = events;
            user.save((err,user) => {
                if(err || !user){
                    res.status(400).json({Error: "Error while saving data in user events"})
                }
                res.json({event: event, user: user});
            })
        })
        
    })


}

exports.deleteEvent = (req,res) => {
    const event = req.event;
    event.remove((err, event) => {
        if (err) {
          return res.status(400).json("Failed to delete event");
        }
        res.json({ message: "Event deleted succesfully" });
      });
}