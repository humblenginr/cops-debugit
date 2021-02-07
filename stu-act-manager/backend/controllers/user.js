var User = require('../models/user');

exports.getUserById = (req,res,next,id) => {
    User.findById(id)
    .populate('events')
    .exec((err,user) => {
        if(err || !user){
            return res.status(400).json({Error : "User not found!"});
        }
        req.profile = user;
        next();
    })
}

exports.getUser = (req,res) => {
    const profile = req.profile;
    profile.salt = undefined;
    profile.encry_password = undefined;
    res.json(profile);
}
