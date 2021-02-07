var express =require('express');
const { isAuthenticated, isSignedIn } = require('../controllers/auth');
const { createEvent } = require('../controllers/event');
const { getUserById } = require('../controllers/user');
var router = express.Router();


//router params
router.param('userId',getUserById);

router.get('/',(req,res) => {
    res.send("This is main page of events");
})

router.post('/create/:userId',isSignedIn,isAuthenticated,createEvent)



module.exports = router;
