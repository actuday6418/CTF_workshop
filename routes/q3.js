const path = require('path');

const express = require('express');

const router = express.Router();;

router.get('/q3',(req, res, next)=>{
    res.sendFile(path.join(__dirname,'../', 'views','q3.html'))
});

router.post('/q3',(req, res, next)=>{
    if(req.body.q3=='#ff2700'){
        res.sendFile(path.join(__dirname,'../','views','q3-1.html'))
    }
    else{
        res.redirect('/q3')
    }
})

module.exports = router;
