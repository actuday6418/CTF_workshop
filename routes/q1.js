const path = require('path');

const express = require('express');

const router = express.Router();;


router.get('/q1',(req, res, next)=>{
    res.sendFile(path.join(__dirname,'../','views','q1.html'));
});

router.get('/q1/message',(req, res, next)=>{
    res.sendFile(path.join(__dirname,'../','views','message.txt'))
})

router.post('/q1',(req,res, next)=>{
    if (req.body.q1=='HACKERMAN'){
    res.sendFile(path.join(__dirname,'../','views','q1-1.html'))
    }
    else{
        res.redirect('/q1')
    }
});

module.exports= router;
