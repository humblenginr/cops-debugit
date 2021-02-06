var express =require('express');
var router = express.Router();

router.get('/',(req,res) => {
    res.send("This is main page of events");
})



module.exports = router;
