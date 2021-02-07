var express =require('express');
const { isSignedIn, isAuthenticated } = require('../controllers/auth');
const { getUserById, getUser } = require('../controllers/user');
var router = express.Router();

//router params
router.param('userId',getUserById);

router.get('/',(req,res) => {
    res.send("This is main page of events");
})
router.get('/:userId',isSignedIn,isAuthenticated,getUser)




module.exports = router;
